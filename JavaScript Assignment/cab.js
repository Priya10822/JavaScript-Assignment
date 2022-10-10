function about(hobby, favSinger){
    console.log(this.firstName,this.age,hobby,favSinger)
}
const user1={
    firstName:"Priya",
    age:21,
  
}
const user2={
    firstName:"Sagar",
    age:22,
  
}

//call
// about.call(user1,"Singing", "Arijit Singh");

//apply
// about.call(user2,"Sketching", "Atif Aslam");

//bind-return function
const func= about.bind(user1,"Dancing","Jonita Gandhi")
func();
