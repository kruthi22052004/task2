let tasks = [];

document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;

    const task = {
        id: Date.now(),
        name: taskName,
        description: taskDesc,
        completed: false
    };

    tasks.push(task);
    event.target.reset();
    renderTasks();
});

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

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

function markComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
