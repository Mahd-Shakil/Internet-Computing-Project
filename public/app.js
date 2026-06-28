// Mock data based on your wireframes
const mockTasks = [
    {
        id: 1,
        title: "Design landing page mockups",
        status: "In Progress",
        dueDate: "2026-06-10",
        priority: "High"
    },
    {
        id: 2,
        title: "Write unit tests for API",
        status: "Pending",
        dueDate: "2026-06-15",
        priority: "Medium"
    },
    {
        id: 3,
        title: "Review pull requests",
        status: "Completed",
        dueDate: "2026-06-05",
        priority: "Low"
    },
    {
        id: 4,
        title: "Update documentation",
        status: "Pending",
        dueDate: "2026-06-20",
        priority: "Medium"
    }
];

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
    taskList.innerHTML = ''; // Clear current

    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="p-4 text-sm text-gray-500 italic border-b text-center">No tasks yet. Create your first task!</div>';
        return;
    }

    tasks.forEach(task => {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-12 gap-4 p-3 border-b border-gray-200 text-sm items-center hover:bg-gray-50 transition';
        
        row.innerHTML = `
            <div class="col-span-5 font-medium text-gray-800">${task.title}</div>
            <div class="col-span-2">${getStatusBadge(task.status)}</div>
            <div class="col-span-3 text-gray-600">${task.dueDate}</div>
            <div class="col-span-2 flex justify-between items-center">
                <span class="border px-2 py-1 text-xs rounded text-gray-600">${task.priority}</span>
                <a href="task-detail.html" class="text-blue-600 hover:underline text-xs">View</a>
            </div>
        `;
        taskList.appendChild(row);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderTasks(mockTasks);
});