class Student {
    constructor(name) {
        this.name = name;
    }
    study() {
        console.log(`${this.name} is studying`);
    }

    // This method is not applicable to all students
    takeTest() {
        console.log(`${this.name} is taking a test`);
    }
}

const student = new Student('John Doe');
student.study();

student.takeTest(); // whoopsie! This method is not applicable to all students