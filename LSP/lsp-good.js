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

    // college students needs to take tests
    takeTest() {
        console.log(`${this.name} is taking a test`);
    }
}

const student = new CollegeStudent('John Doe');
student.study();
student.takeTest();

const kid = new Student('Jane Doe');
kid.study();
// kid.takeTest(); // kids can't take tests