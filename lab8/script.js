
// Excersie 1
var str = "".__proto__;
str.filter = function(removeStr){
    return this.replace(removeStr, "");
}

console.log("This house is not nice!".filter("not"))

// Exercise 2
var arr = [].__proto__;
arr.bubbleSort = function(){
    var arr = this;
    for(let i in arr){
        for(let j in arr){
            if(arr[j] > arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log([6,4,0,3,-2,1].bubbleSort());

// Exercise 3 - using function constructor
function Person(){
    this.first = "Default";
    this.last = "Default"
}

Person.prototype.teach = function(subject){
    const result = this.first + " " 
        + this.last + " in now teaching " + subject;
    console.log(result);
}

const teacher = new Person();
teacher.first = "Tina";
teacher.last = "Xing";
teacher.teach("WAA");

// Exercise 3 - using Object.create()
const person = function(first, last){
    let firstName = first;
    let lastName = last;

    return{
        first: firstName,
        last: lastName
    }
}

const teacher2 = Object.create(person("Tina", "Xing"));
teacher2.teach = function(subject){
    const result = this.first + " " 
        + this.last + " in now teaching " + subject;
    console.log(result);
};

teacher2.teach("MWA");

// Exercise 4 - using object prototype
const person2 = {
    name: "default",
    age: 0,
    greet: function(){
        console.log("Greetings, my name is " + this.name + " and I am" + 
            this.age + " years old.");
    },
    salute: function(){
        console.log("Good morning! and incase I don't see you, good afternoon, good evening and good night!");
    }
}

const student = Object.create(person2);
student.name = "Selam";
student.age = 27;
student.major = "Computer Science";
student.greet = function(){
    console.log("Hey, my name is " + student.name + " and I am studying " + student.major);
}
student.greet();
student.salute();

const professor = Object.create(person2);
professor.name = "Tina Xing";
professor.age = 27;
professor.department = "Computer Science";
professor.greet = function(){
    console.log("Good day, my name is " + professor.name + " and I am in the " + professor.department + " department");
}
professor.greet();
professor.salute();


// Exercise 4 - using function constructor
function Person3() {
    this.name = "default";
    this.age = 0;
}

Person3.prototype.greet = function(){
    console.log("Greetings, my name is " + this.name + " and I am" + 
        this.age + " years old.");
};

Person3.prototype.salute = function(){
    console.log("Good morning! and incase I don't see you, good afternoon, good evening and good night!");
}

const student1 = new Person3();
student1.name = "Fre"
student1.major = "Software Engineering"
student1.greet = function(){
    console.log("Hey, my name is " + student1.name + " and I am studying " + student1.major);
}

student1.greet();
student1.salute();

const professor1 = new Person3();
professor1.name = "Dr. Nair";
professor1.department = "Mathematics"
professor1.greet = function(){
    console.log("Good day, my name is " + professor1.name + " and I am in the " + professor1.department + " department");
}

console.log()
professor1.greet();
professor1.salute();


// String.prototype.filter = function(removeStr){
//     return this.replace(removeStr, "")
// }

// console.log("This house is not nice!".filter("not"))





