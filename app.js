//selecting all inputs from html
const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-button");
const outputBox=document.querySelector("#ouput");

function compareValues(sum,luckyNumber){
    if (sum%luckyNumber===0) {
        outputBox.innerText="Your birthdate is lucky";
    } else {
        outputBox.innerText="Your birthdate is not lucky";
    }
}
function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for (let i = 0; i < dob.length; i++) {
        sum+=Number(dob.charAt(i));
    }
    return sum;
}

function checkBirthDateIsLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    if (sum&&luckyNumber.value) {
        compareValues(sum,luckyNumber.value);
    }
    else{
        outputBox.innerText="Please enter both the fields"
    }
}
//adding events to the button on click
checkButton.addEventListener("click",checkBirthDateIsLucky);