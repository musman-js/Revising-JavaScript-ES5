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


// let questions = [
//    {
//           question: "HTML stands for" ,
//           option1 : "Htyper Text Markup Language" ,
//           option2 : "hyper Text Markup Language" ,
//           option3 : "Hyper Text Markup Language", 
//           correctAns : "Hyper Text Markup Language"
//     },
//     {
//         question: "CSS stands for" ,
//         option1 : "Cascading Style Sheets" ,
//         option2 : "Cascade Style sheet" ,
//         option3 : "Cascade Styles Sheets" ,
//         correctAns : "Cascading Style Sheets"
//     }
// ]

// let question = document.getElementById("question");
// let option1  = document.getElementById("option1");
// let option2  = document.getElementById("option2");
// let option3  = document.getElementById("option3");
// let button = document.getElementById("button")
// let index = 0;
// let score = 0;

// let nextQuestions = () => { 

//     let getOption = document.getElementsByName("option");

//   for(let i = 0 ; i<getOption.length; i++){

//     if(getOption[i].checked){
       
//         // getting the selected option value
//         let selectedValue = getOption[i].value
//         // console.log(selectedValue);

//         // getting selected Question
//         let selectedQuestion =  questions[index-1]["question"]
//         // console.log(selectedQuestion);

//         // getting correct Answer
//         let correctAns = questions[index-1]["correctAns"]
//         // console.log(correctAns);

//         //Condition for score
//         if(selectedValue === correctAns){
//             score++
//         }
//     }
//     getOption[i].checked = false
// }

// //condition for marking score
// if(score> questions.length){
//    let percentage = (score/questions.length)*100;
// }

//  //priting questions
//  question.innerHTML = questions[index].question
//  option1.innerHTML = questions[index].option1
//  option2.innerHTML = questions[index].option2
//  option3.innerHTML = questions[index].option3
//  index++
//  }
 

// let num2 =  10;

// switch(true){
//     case 1  : console.log("maza agayaa"); break
//     case 2 : console.log("maza nh agaya"); break
//     default : console.log('chutiya kat gaya'); 
// }


// let arr = ['banana' , 'apple' , 'orange'];
// arr.shift()
// console.log(arr);


// const name =  true;
// switch(true){
//     case 1 : console.log('hello usman'); break
//     default : console.log('bunbulaye mehman');
// }


// let name1  = document.createElement("p");
// let fullNAme = document.createTextNode("Muhammad Usman");
// name1.appendChild(fullNAme);
// console.log(name1);



    // let ulList = document.getElementById('unordered');
    // let liList = document.createElement("li");
    // let listContent  = document.createTextNode("Muhammad Usman");
    // liList.appendChild(listContent)
    // ulList.appendChild(liList);

    // console.log(liList.childNodes);


// name()

// let num1 = 23;
// let num2 = 34
// console.log(num1+num2);


// let name2 =  "Muhammad Usman";

// let obj ={
//     name : name2
// }

// localStorage.setItem("name" , JSON.strin


//laiba se shadi krni he 

// let laiba = "Muhabbat he Usman ki"
// let sami  = "SYED SAMI HUSSAIN";
// let usman = "MUHAMMAD USMAN";
// const love = sami;


// if(laiba === love){
//     console.log('Usman note chape ga');
// }
// else{
//     console.log("Usman barbad hojayega");
// }


// let obj = {
//     name :'Muhammad usman' ,
//     age : 17,
//     mobile : {
//         mobName: "Tecno pova 2",
//         color : 'black' ,
//         future : {
//             career : "Software Engineer",
//             shadi : "laiba sahar"
//         }
//     }
// }


// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.mobile.mobName)
// console.log(obj.mobile.color)
// console.log(obj.mobile.future.career)
// console.log(obj.mobile.future.shadi)




// let naba = "Laiba ko hasil krne ka tareeqa";
// let ayaan  = "naba se shadi krne ka tareqa";
// let nabaAge =  20;
// let ayaanAge = 17;


// if(nabaAge > ayaanAge){
//     console.log("Sorry shadi nh hoskti");
// }
// else{
//     console.log("Shadi hoskti he.");
// }




// let num1 = 34;
// let num2 = 35;

// if(num1 > num2){
//     console.log('hello');
// }
// else{
//     console.log('bye');
// }



// let sifarish =false;
// let skills  =  true;
// let job = sifarish && skills;
// console.log(job);

// let sifarish =false;
// let skills  =  true;
// let job = sifarish || skills;
// console.log(job);

// let randomNum = Math.random()*10
// console.log(randomNum);


// let num  = 34.34;
// let roundOff= Math.round(num);
// let floor  = Math.floor(num);
// let   = Math.floor(num);
// console.log(roundOff , floor);


// let num2 = 34;
// let num1 = 24;
// if(num2 === num1){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }


// let tableNum =  prompt("Enter Table number");
// let tableLength = prompt("Enter Table Length");

// for(let i = 1 ; i<=tableLength; i++){
//     document.write(`${tableNum} x ${i} = ${tableNum*i}  <br>`);

// }


// let num  = 24325.324324;
// let numToString = num.toFixed().toString();
// console.log(numToString);

// let age = 17;
// if(age <=18){
//     console.log("License mil jayega");
// }
// else{
//     console.log("License nh milega");
// }


// for(let i = 0 ; i<==10; i++){
//     console.log(i);
// }


// let userInfo = prompt("Enter Your name");
// let userAge = prompt("Enter your age");
// let userFocus = prompt("Enter your focus");


// let obj  = {
//     name : userInfo,
//     age : userAge,
//     focus : userFocus
// }

// document.write(`User Name is : ${obj.name} <br> User age is : ${obj.age} <br> User focus is  : ${obj.focus}`);



let gym  = "Body banani he";
let parhai = "Kl se paka krni he";
let papers =  "Allah Malik he";

if(gym){
    console.log('Bachia Down!');
}
else if(parhai){
    console.log('1st year Pass');
}
else{
    console.log("Fail , Future ke Lag gaye");
}
