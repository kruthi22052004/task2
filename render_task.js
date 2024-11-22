function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the list before rendering

    tasks.forEach((task) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">
                <strong>${task.name}</strong>: ${task.description}
            </span>
            <div>
                <button onclick="markComplete(${task.id})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}