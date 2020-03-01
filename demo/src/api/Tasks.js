export function getAllTasks() {
    return new Promise(resolve => {
        let tasks = [
            {
                id: 1,
                name: 'Workshop React',
                description: 'This is a react workshop'
            },
            {
                id: 2,
                name: 'Workshop React 2',
                description: 'This is a react workshop 2'
            },
            {
                id: 3,
                name: 'Workshop React 3',
                description: 'This is a react workshop 3'
            },
            {
                id: 4,
                name: 'Workshop React 4',
                description: 'This is a react workshop 4'
            }
        ];
        setInterval(() => {
            resolve(tasks);
        }, 2000);
    });
}

