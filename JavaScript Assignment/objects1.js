//Not efficient way
// const course={
//     lecture: 10,
//     section: 3,
//     title : 'JavaScript',
//     notes: {
//         introduction: "Welcome to JS"
//     },
//     enroll(){
//             console.log('you are successfully enrolled')
//     }

//  }

// course.enroll()
// console.log(course)
// course.price=999;//dynamic nature

//we want to create multiple objects

//Factory Function
// function createCourse(title){
//     return {
//         title:title,
//         enroll(){
//             console.log('you are successfully enrolled');
//         }
//     }
// }
// const course=createCourse('JavaScript');
// course.enroll();

//Constructor Function
//Pascal Case
//func is ref data type--here Course func is obj
// function Course(title){
//     this.title=title,
//     this.enroll=function(){
//         console.log('you are successfully enrolled');
//     }
// }
// const course=new Course('Javascript');
// course.enroll();
// delete course.title;
//delete the obj property
// console.log(course.constructor);

//Constructor Function
// const Course_1=new Function('title',`
// this.title=title,
// this.enroll=function(){
//     console.log('you are successfully enrolled');
// }`)
// const course_2=new Course_1('Javascript');
// course_2.enroll();

//Looping in obj

// const course={
//     title:'C++',
//     enroll(){
//         console.log("You are successfully enrolled");
//     }
// }

//for in loop
// for(let key in course){
//     console.log(key,course[key]);
// }

//for of loop
//Copying elements
// const course_1={};
// for(let key of Object.keys(course)){
//     course_1[key]=course[key];
// }
// console.log(course_1);
