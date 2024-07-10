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


class KindergartenStudent extends Student {
    constructor(name) {
        super(name);
    }
}

const kid = new KindergartenStudent("John");

kid.study();
kid.takeTest(); // whoopsie! This method is not applicable to all students
// kids can't take tests