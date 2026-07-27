// Function to check if user is logged in
async function checkAuth() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    
    // If no user is logged in, redirect to login page
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // If logged in, fetch their tasks
    fetchTasks();
}

// Function to fetch tasks from Supabase
async function fetchTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '<div class="p-4 text-sm text-gray-500 text-center">Loading tasks...</div>';

    // Query the Tasks table (RLS automatically filters for the logged-in user)
    const { data: tasks, error } = await supabaseClient
        .from('tasks')
        .select('*')
        .order('due_date', { ascending: true }); // Sort by due date by default

    if (error) {
        console.error("Error fetching tasks:", error);
        taskList.innerHTML = '<div class="p-4 text-sm text-red-500 text-center">Failed to load tasks.</div>';
        return;
    }

    renderTasks(tasks);
}

// Function to map status to UI colors
function getStatusBadge(status) {
    let classes = "border px-2 py-1 text-xs rounded bg-gray-50 text-gray-700";
    if (status === "Completed") classes = "border border-green-300 px-2 py-1 text-xs rounded bg-green-50 text-green-700";
    if (status === "In Progress") classes = "border border-blue-300 px-2 py-1 text-xs rounded bg-blue-50 text-blue-700";
    
    return `<span class="${classes}">${status}</span>`;
}

// Function to render tasks to the DOM
function renderTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear loading state

    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="p-4 text-sm text-gray-500 italic border-b text-center">No tasks yet. Create your first task!</div>';
        return;
    }

    tasks.forEach(task => {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-12 gap-4 p-3 border-b border-gray-200 text-sm items-center hover:bg-gray-50 transition';
        
        const displayDate = task.due_date ? task.due_date : 'No date';

        row.innerHTML = `
            <div class="col-span-5 font-medium text-gray-800">${task.title}</div>
            <div class="col-span-2">${getStatusBadge(task.status)}</div>
            <div class="col-span-3 text-gray-600">${displayDate}</div>
            <div class="col-span-2 flex justify-between items-center">
                <span class="border px-2 py-1 text-xs rounded text-gray-600">${task.priority}</span>
                <!-- Pass the task ID in the URL so the detail page knows which task to load -->
                <a href="task-detail.html?id=${task.id}" class="text-blue-600 hover:underline text-xs">View</a>
            </div>
        `;
        taskList.appendChild(row);
    });
}

// Handle Logout Button
document.addEventListener('DOMContentLoaded', () => {
    // Check auth as soon as the page loads
    checkAuth();

    // Attach logout event to the logout button
    const logoutBtn = document.querySelector('a[href="login.html"]');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await supabaseClient.auth.signOut();
            window.location.href = 'login.html';
        });
    }
});