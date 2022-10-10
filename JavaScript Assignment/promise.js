// let data= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10);
//     },2000)
// })
// console.log(data);

// //consume
// data.then((item)=>{
//     console.log("1st",item);
//     return item*10;
// })
// .then((item)=>{
//     console.log("2nd",item);
//     return item*10;
// })
// .then((item)=>{
//     console.log("3rd",item);
// })
// .catch((err)=>{
//     console.log("catch block",err)
// })

//finally
// function checkMail() {
//     return new Promise((resolve, reject) => {
//       if (Math.random() > 0.5) {
//         resolve('Mail has arrived');
//       } else {
//         reject(new Error('Failed to arrive'));
//       }
//     });
//   }
  
// checkMail()
// .then((mail) => {
//       console.log(mail);
// })
// .catch((err) => {
//       console.error(err);
// })
// .finally(() => {
//       console.log('Experiment completed');
// });


//Promise.all--if promises run parallely--give result after all promises resolved
//Promise.allSettled--give the status of all the promises either fullfilled or rejected
//Promise.race--first resolved or rejected promise
let data=Promise.allSettled([
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("2 second")
        },2000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
        reject("1 second")
        },1000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("4 second")
        },4000)
    })
])

data.then((value)=>{
    console.log("Inside then block",value);
}).catch((err)=>{
    console.log("Inside catch block",err);
})