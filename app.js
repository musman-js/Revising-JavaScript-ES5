// let userInput = prompt("Enter City Name");
// let city = ['karachi' , 'lahore' , 'islamabad']
// if(userInput == 'karachi'){
//     alert('Welcome to the City of Light')
// }
// else{
//     alert('Welcome')
// }


// Percentage Calculator
// const subj1 = parseInt(prompt('Enter Math Marks'));
// const subj2 = parseInt(prompt('Enter Isl Marks'));
// const subj3 = parseInt(prompt('Enter Eng Marks'));

// let total = subj1 + subj2 + subj3;
// const percentage = (total / 300) * 100;

// if (percentage >= 80) {
//     document.write(`Percentage : ${percentage}% <br> Grade : A+`);
// }
// else if (percentage >= 70) {
//     document.write(`Percentage : ${percentage}% <br> Grade : A`);
// }
// else if (percentage >= 60) {
//     document.write(`Percentage : ${percentage}% <br> Grade : B`);
// }
// else if(percentage >= 50){
//     document.write(`Percentage : ${percentage}% <br> Grade : C`)
// }
// else{
//     document.write(`Percentage : ${percentage}%  <br> Grade : Fail :))`)
// }




// Simple Calculator by using If condition
// const userNum1 = +prompt('Enter First Number');
// const operator = prompt('Enter Operator to Perform Calculation.')
// const userNum2 = +prompt('Enter Second Number');

// if(operator === '+'){
//    const addition = userNum1 + userNum2
//    document.write(`${userNum1} ${operator} ${userNum2} = ${addition}`)
// }

// else if(operator === '-'){
//     const subtraction = userNum1 - userNum2;
//     document.write(`${userNum1} ${operator} ${userNum2} = ${subtraction}`)
// }

// else if(operator === '*'){
//     const multiplication = userNum1 * userNum2;
//   document.write(`${userNum1} ${operator} ${userNum2} = ${multiplication}`)
// }
// else if(operator === '/'){
//     const division = userNum1 / userNum2;
//   document.write(`${userNum1} ${operator} ${userNum2} = ${division}`)
// }
// else {
//     alert('Error')
// }




// localStorage practice
// let sendValue = () => {
//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     // console.log(name ,email)
//     let obj = {
//         name : name.value ,
//         email : email.value
//     }

//     localStorage.setItem("name" , JSON.stringify(obj))
// }


// if practice
// const city = ['karachi', 'islamabad', 'lahore', 'pindi'];
// const user = prompt('Enter city name');

// if (user === city[0]) {
//     alert('Welcome to city of shapaters')
// }

// if (user === city[1]) {
//     alert('Welcome to the city of Burgers')
// }

// if (user === city[2]) {
//     alert('Welcome to the city of boys');
// }
// if (user === city[3]) {
//     alert('Welcome to the city of juttlog')
// }



// let obj = {
//     name : "usman",
//     muhabbat : "pesa",
//     age : 16
// }

// let {name , muhabbat , age} = obj;
// console.log(muhabbat)



// let changeColor = () => {
//     const button = document.getElementById('button');

//     button.style.backgroundColor = "wheat"
//     button.style.border = "2px solid Black"
//     button.style.padding = "5px 5px 5px 5px"
// }


// let big = () => {
//     const image = document.getElementById('image');
//     image.style.width = "200px"
// }


// let small = () => {
//     const image = document.getElementById('image');
//     image.style.width = "100px"
// }




// const num = 40;
// const num2 = 30;
// if (num === num2) {
//     alert("You are a stupiud");
// }
// else {
//     alert('You are a genius')
// }





// ==========DOM PRACICE===========
// let generate = () => {
//     const input = document.getElementById('input');

//     // Generate Element
//     let list = document.createElement("li");
//     let listText = document.createTextNode(input.value);
//     list.appendChild(listText);


//     // Generate the input on sceeen
//     const ulList = document.getElementById("ulList");
//     ulList.appendChild(list);
//     input.value = ""

// }

// // DeleteAll
// let del = ()=> {
//     const ulList = document.getElementById("ulList")
//     ulList.innerHTML = ""

// }




// const player1 = prompt("Enter player 1 name");
// const player2 = prompt("Enter player 2 name");

// let num = Math.random()*1
// let mainNum = Math.round(num)
// // console.log(mainNum)
// if(mainNum == 1){
//     alert(`${player1} win`)
// }
// else{
//     alert(`${player2} win`)
// }



// const arr = ['Karachi', "Lahore", "Islamabad", "Multan"];

// console.log(arr.slice(0 , 2));


// const arr2 = [ "Karachi" , "Lahore " , "Multan" , "Islamabad"];
// // let push = arr2.push("Usman")
// // let unshift = arr2.unshift("ammar")
// // let  pop = arr2.pop();
// // let shift  = arr2.shift()

// // let splice =  arr2.splice(1 , "Usman    ")
// console.log(arr2)


// const name  = "MUhammad Usman"
// const lastName  =  "Khan"

// console.log(`${name} ${lastName}`)

// let arr  =  ["Karachi" ,  "Peshawar" , 
// "lahore"
// ]
// let splice = arr.splice(0,1)
// console.log(arr)



// const obj = {
//     name: "Muhammad Usman Khan" , 
//     age  : 16 , 

// }

// console.log(obj.name);

// let arr  = [
//     question = {
//         ques1 : "What is your name" 
//     },
//     answer = {
//       answer  :  "Muhammad Usman Khan"
//     }
// ]

// console.log(arr[0].ques1);
// console.log(arr[1].answer);



// let obj = {
//     name  : "Muhammad Usman",
//     age :  16 , 
//     obj2 : {
//         email : "usman2037966@gmail.com" , 
//         phone : "Tecno Pova 2",
//         obj3 : {
//             address : "C-34 Uk-Square"
//         }
//     }    
// }

// console.log(obj.obj2.obj3.address);
// let name =  () => {
//     const name  = "Muhammad Usman" ;
//     const age  = 16
//      let nameAge =  name +  age ;
//      return nameAge
// }

// console.log(name());

// let flutter = ["Anothercourse"]
// let future =  "Sami se ziada well settled hona he ";

// for(let i = 0 ; i<=12 ; i++){
//     console.log(flutter[i]);
// }

// if(0 === 1) {
//     console.log("success");
// }
// else{
//     console.log("fail");
// }



// let getValue=()=> {
//     const input = document.getElementById('input');
//     let obj=  {
//         name : input.value
// }
// localStorage.setItem("name" , JSON.stringify(obj))

// let value = localStorage.getItem("name")

// let string = JSON.parse(value)
// document.write(value)
// } 



// let input =  document.getElementById("input");
// let currentValue = '';

//  // Printing Input 
// let calculation = (value) => {
//  currentValue += value
//  input.value = currentValue
// }

// // clearing the screen
// let clearAll = () => {
//     currentValue = ""
//     input.value = currentValue
// }

// let result = () =>  {
 
//     try{
//         currentValue = eval(currentValue)
//         input.value = currentValue
//     }
//     catch{
//         input.value = "Errror"
//     }
// }


const questions = [
   {
          question: "HTML stands for" ,
          option1 : "Htyper Text Markup Language" ,
          option2 : "hyper Text Markup Language" ,
          option3 : "Hyper Text Markup Language"
    },
    {
        question: "CSS stands for" ,
        option1 : "Cascading Style Sheets" ,
        option2 : "Cascade Style sheet" ,
        option3 : "Cascade Styles Sheets"
    }
]

let question = document.getElementById("question");
let option1  = document.getElementById("option1");
let option2  = document.getElementById("option2");
let option3  = document.getElementById("option3");
let button = document.getElementById("button")
let index = 0

let nextQuestions = () => {

    let getOption  = document.getElementsByName("option")
    // console.log(getOption);

    // for(let i = 0; i<=getOption.length; i++){
    //     if(getOption[i].checked){
    //         let selectedValue = getOption[i].value
    //         console.log(selectedValue);
    //     }
    // }

    //priting questions
    question.innerHTML = questions[index].question
    option1.innerHTML = questions[index].option1
    option2.innerHTML = questions[index].option2
    option3.innerHTML = questions[index].option3

}
