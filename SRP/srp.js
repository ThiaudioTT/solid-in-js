// Single Responsibility Principle (Princípio da responsabilidade única


// DON'T:
class TaskManager {
    user = 'User';

    constructor() {
        this.tasks = [];
        user = 'User';
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
    }

    completeTask(task) {
        task.complete = true;
    }

    // Method that violates the SRP (Do more than one thing, taskManager should not be responsible for sending emails)
    sendTaskToEmail(task) {
        console.log(`Enviando email para ${task.user}...`);
    }
}

// DO:

class TaskManager {
    // methods from the previous example minus the sendTaskToEmail method
}

class EmailManager {
    sendTaskToEmail(task) {
        console.log(`Enviando email para ${task.user}...`);
    }
}


// doing this we can separate the responsibilities of the classes, making the code more organized and easier to maintain
// and also we can reuse the EmailManager class in other parts of the code if necessary
// and we know where to look if we need to change or look for a bug.