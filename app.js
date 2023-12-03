let userInput = prompt("Enter City Name");
let city = ['karachi' , 'lahore' , 'islamabad']
if(userInput == 'karachi'){
    alert('Welcome to the City of Light')
}
else{
    alert('Welcome')
}


// Percentage Calculator
const subj1 = parseInt(prompt('Enter Math Marks'));
const subj2 = parseInt(prompt('Enter Isl Marks'));
const subj3 = parseInt(prompt('Enter Eng Marks'));

let total = subj1 + subj2 + subj3;
const percentage = (total / 300) * 100;

if (percentage >= 80) {
    document.write(`Percentage : ${percentage}% <br> Grade : A+`);
}
else if (percentage >= 70) {
    document.write(`Percentage : ${percentage}% <br> Grade : A`);
}
else if (percentage >= 60) {
    document.write(`Percentage : ${percentage}% <br> Grade : B`);
}
else if(percentage >= 50){
    document.write(`Percentage : ${percentage}% <br> Grade : C`)
}
else{
    document.write(`Percentage : ${percentage}%  <br> Grade : Fail :))`)
}




// Simple Calculator by using If condition
const userNum1 = +prompt('Enter First Number');
const operator = prompt('Enter Operator to Perform Calculation.')
const userNum2 = +prompt('Enter Second Number');

if(operator === '+'){
   const addition = userNum1 + userNum2
   document.write(`${userNum1} ${operator} ${userNum2} = ${addition}`)
}

else if(operator === '-'){
    const subtraction = userNum1 - userNum2;
    document.write(`${userNum1} ${operator} ${userNum2} = ${subtraction}`)
}

else if(operator === '*'){
    const multiplication = userNum1 * userNum2;
  document.write(`${userNum1} ${operator} ${userNum2} = ${multiplication}`)
}
else if(operator === '/'){
    const division = userNum1 / userNum2;
  document.write(`${userNum1} ${operator} ${userNum2} = ${division}`)
}
else {
    alert('Error')
}



