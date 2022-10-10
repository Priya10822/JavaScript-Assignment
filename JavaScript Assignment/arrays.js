//forEach - executes a given function on every element of an array

//---Sum of all the items---
// const num=[1,2,3,4,5];
// let sum=0;
// num.forEach(item=>{
//     sum+=item;
// });
// console.log(sum);

//---Count of letters---
// const letters=['a','b','a','c','d','a','d','b'];
// let count={};
// letters.forEach(item=>{
//     if(count[item]){
//         count[item]++;
//     }
//     else{
//         count[item]=1;
//     }

// });
// console.log(count);



//Map Method

//convert array of string numbers into numbers
// const str=['1','2','3','4'];
// const numbers=str.map(item=>Number(item));
// console.log(numbers);


//Filter method- creates a new array (remove falsy values)

//array of even numbers
// const numbers=[1,2,3,4,5,6,7,8];

// const even= numbers.filter(isEven);

// function isEven(value){
//     return value % 2===0;
// }
// console.log(even);


//Reduce Method-return one single output value

// const numbers=[1,2,3,4,5];
// const total=numbers.reduce(sum,0);
// function sum(accumulator, value)// accumulator intialized with initial value
// {
//     return accumulator+value;
// }
// console.log(total);

//---total of all the products--
// const store=[
//     {
//         product: 'laptop',
//         value: 1000,
//         count:3
//     },
//     {
//         product: 'desktop',
//         value: 4000,
//         count:4
//     },
//     {
//         product: 'mobile',
//         value: 500,
//         count:2
//     }
// ]
// const totalValueStore= store.reduce((acc,item)=>acc+(item.value * item.count),0);
// console.log(totalValueStore);



//slice -reture shallow copy of the portion of an array
//start,end
// const numbers=[1,2,3,4,5,6,7,8];
// const numbers2=numbers.slice(-3);//last three items
// console.log(numbers2);

//splice -removing and replacing from an array 

//change the array
// start index, how many items want to remove

// const numbers=[1,2,3,4,5,6];
// const deleted=numbers.splice(2,3,8,9);// 8,9 added in place of deleted items
// console.log(numbers);
// console.log(deleted);


//sort-change the array
// const names=['priya', 'jessica', 'florina', 'mishka'];
// names.sort();
// console.log(names);

// const num=[12,34,21,56,45,13];
// num.sort((a,b)=>a-b);
// console.log(num);


//concat
//not change original array
// const a=[1,2,3];
// const b=[4,5,6];
// const c=[7,8,9];
// const d=a.concat(b,c);
// console.log(d);

//fill- change original array
//value, start, end
// function fillInNumber(n){
//     return Array(n).fill(0).map((_,index)=>index+1);
// }
// console.log(fillInNumber(10));


//includes method
// const fruits=['apple', 'banana', 'orange'];
// const res= fruits.includes('apple');
// if(res){
//     console.log("Yuppy!!");
// }
// else{
//     console.log("Sad..let's buy an apple");
// }



//join method

// const countries=['India', 'USA', 'UK'];
// const res=countries.join(', ');
// console.log("I want to visit "+ res);


//reverse method-change original array

// const nums=[1,2,3,4,5,6];
// const newArr=[...nums].reverse();
// console.log(newArr);

// const str="coding is fun!";
// const res=str.split("").reverse().join("");
// console.log(res);


//push method- return new length

// const num=[1,2,3,4];
// len=num.push(5,6,7,8)
// console.log(num);
// console.log(len);


//pop method--return pop element

// const num=[1,2,3,4,5];
// const lastItem=num.pop();
// console.log(lastItem);

//unshift method--add at the beg and return new length

// const num=[1,2,3,4,5];
// const newLen=num.unshift(0,-1);// add -1 first then 0
// console.log(num);
// console.log(newLen);

//shift method

// const num=[1,2,3,4];
// const firstItem=num.shift();
// console.log(firstItem);

//indexOf----return first occurrence index
//swap elements
// const names=['priya', 'tina', 'garima' ,'chiku','garima'];
// const idx=names.indexOf('garima');
// names[idx]='piyush';
// console.log(names);

//lastIndexOf
// const names=['priya', 'tina', 'garima' ,'chiku','garima'];
// const lastIdx=names.lastIndexOf('garima');
// console.log(lastIdx);

//every--returns true only if callback func returns true for all the item

// const num=[1,2,3,4,5,-1];
// //is number positive?
// console.log(num.every(nums=>nums>0));

//if all the persons having name property
// const person=[
//     {
//         name:'Sagar'
//     },
//     {
//         name:'Eva'
//     },
//     {
//         name:'Trisha'
//     },
//     {
//         surname:'Jay'
//     }

// ];
// const res=person.every(person=>person.name!==undefined);
// console.log(res);

//some method--return true if callback func return true for atleast one element

// const nums=[1,2,3,4,5];
// const res=nums.some(greaterThenFour);
// function greaterThenFour(item){
//     return item>4;
// }
// console.log(res);

//person who is adult (age>18)
// const persons=[
//     {
//         name:'Sagar',
//         age:25
//     },
//     {
//         name:'Eva',
//         age:16
//     },
//     {
//         name:'Trisha',
//         age:21
//     },
//     {
//         surname:'Jay',
//         age:20
//     }

// ];
// const res=persons.some(person=>person.age>18);
// console.log(res);

//find ---return first item for which callback function true

//find and return the item

//find age of sagar
// const persons=[
//         {
//             name:'Sagar',
//             age:21
//         },
//         {
//             name:'Piyush',
//             age:22
//         },
//         {
//             name:'Vishal',
//             age:24
//         },
// ];
// const age=persons.find(findSagar).age;
// function findSagar(person){
//     return person.name === "Sagar";
// }
// console.log(age);


//findIndex-find item then return the index
// const nums=[1,2,3,4,5];
// const res=nums.findIndex(findThree);
// function findThree(value){
//     return value===3;
// }
// console.log(res);

//from method---create shallow copied array from array like or iterable obj

//string of num to array of num

// const str='123456';
// const res=Array.from(str,Number);//Number constructor
// console.log(res);


//Set contains unique values
// const nums=[1,2,3,4,5,6,7,1,2,3,4,4,3,5,7];
// const res=Array.from(new Set(nums));
// console.log(res);


//isArray-check for array
// const names=['Jay', 'Khushi', 'Aastha', 'Nitya'];
// const str='Hello World';
// const num=12;
// console.log(Array.isArray(str));


//flat method---creates new array with all the sub array elements
//depth-by default 1
//to work for infinity num
// const arr=[1,[2,[3, [4,[5]]]]];
// const res=arr.flat(Infinity);
// console.log(res);