export const api = {
    tasks: {
        getAll: async() => {
            const response = await fetch('http://localhost:5000/tasks');
            const tasks = await response.json();
            return tasks;
        },
        changeTaskStatus: async (id, isCompleted) => {
            const response = await fetch(
                `http://localhost:5000/tasks/${id}`,
                {
                    method: 'POST',
                    cache:'no-cache',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'isCompleted': isCompleted})
                }
            );
            return response.json();
        }
    }
}