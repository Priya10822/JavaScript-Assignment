//only functions provide prototype property 
//think like empty obj

// const hello={key1:"value1"};

//Example-1
// function hello(){
//     console.log("hello world")
// }

// // console.log(hello.prototype);
// //we can add key value pair to the function
// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

// hello.prototype.abc="abc";
// hello.prototype.sing=function(){
//     return "lalalallaa";
// }
// console.log(hello.prototype.sing());

//Example-2
//new keyword return this
//constructor function-constructs obj
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('priya', 'sen', 'priya@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'sharma', 'harsh@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'kumar', 'mohit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());
for(let key in user1){
    //print all the key including prototype key
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}