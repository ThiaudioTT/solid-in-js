class Student {
    constructor(name) {
        this.name = name;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}

class CollegeStudent extends Student {
    constructor(name) {
        super(name);
    }
    takeTest() {
        console.log(`${this.name} is taking a test`);
    }
}

const student = new CollegeStudent('John Doe');
student.study();
student.takeTest();