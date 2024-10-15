class Person {
    firstName = "";
    lastName = "";

    constructor(firstName : string, lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() {
        return `${this.firstName} ${this.lastName}`;
    }

    whoAreYou() {
        return `Hi, I'm ${this.name()}`;
    }
}

let test = new Person("Sumit", "Singh");
console.log(test.whoAreYou());

class Course extends Person{
    course = "";

    constructor(firstName: string, lastName: string, course: string) {
        super(firstName, lastName);
        this.course = course;
    }

    whoAreYou() {
        return `${super.whoAreYou()} and i was studying ${this.course}`;
    }
}

let courses = new Course("Rishabh", "Bisht", "B.tech");
console.log(courses.whoAreYou());

class Employee {

    eid : number | undefined;
    name = "";
    email = "";
    mobile = "";
    age : number | undefined;
    salary : number | undefined;
    bonus : number | undefined;

    constructor(eid : number, name: string, email: string, mobile: string, age: number, salary: number, bonus: number) {
        this.eid = eid;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.age = age;
        this.salary = salary;
        this.bonus = bonus;
    }

    employeeDetails() {
        return `This is employee name : ${this.name}`;
    }

    employeeBonus() {
        return `Bonus amount is ${this.bonus} and now your salary is : ${(this.salary??0) + (this.bonus??0)}`; 
    }
}

let employee = new Employee(1, "Naman", "naman@gmail.com", "9876543211", 24, 15000, 5000);
console.log(employee.employeeDetails());
console.log(employee.employeeBonus());