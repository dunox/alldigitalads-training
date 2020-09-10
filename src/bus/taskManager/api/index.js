export const api = {
    tasks: {
        getAll: async() => {
            const response = await fetch('http://localhost:5000/tasks');
            const tasks = await response.json();
            return tasks;
        },

        addTask: (title) => {
            fetch('http://localhost:5000/tasks', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({
                    title: title,
                }),
            });
        },

        updateTaskStatus: (id, isCompleted) => {
            fetch('http://localhost:5000/tasks/' + id, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({
                    isCompleted: isCompleted,
                }),
            });
        },
        removeTask: (id) => {
            fetch('http://localhost:5000/tasks/' + id, {
                method: "DELETE",
            });
        }
    }
}