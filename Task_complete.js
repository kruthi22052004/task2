function markComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed }; // Toggle completion status
        }
        return task;
    });

    renderTasks(); // Refresh task display
}
