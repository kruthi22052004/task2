async function loadTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the list
    
    tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${task.name}</h3>
            <p>${task.description}</p>
            <button onclick="markComplete('${task.id}')">Complete</button>
            <button onclick="deleteTask('${task.id}')">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    loadTasks(); // Refresh task list
}

async function markComplete(id) {
    await fetch(`/api/tasks/${id}`, { method: 'PUT' });
    loadTasks(); // Refresh task list
}

loadTasks(); // Initial load
