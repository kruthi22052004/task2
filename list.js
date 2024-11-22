// In-memory storage for tasks
let tasks = [];

// Event Listener for Form Submission
document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Get task details from form
    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;

    // Create a new task object
    const task = {
        id: Date.now(), // Unique ID based on timestamp
        name: taskName,
        description: taskDesc,
        completed: false
    };

    // Add task to the task list
    tasks.push(task);

    // Clear the form
    event.target.reset();

    // Update the task display
    renderTasks();
});
