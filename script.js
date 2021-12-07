let age;
const ageOfMajority = 18;
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");
function forbid(){
    alert("This place is forbidden to minors");
}

function accept(){
    message.innerHTML = "Get in. You are major.";
}
let parentalControl = document.querySelector("#parental-control");
let inputAge = document.getElementById("input-age");

function onSubmit(){
    if(isNaN(inputAge.value)){
        alert("The age must be a number!");
        return;
    }
    age = ParseInt(inputAge.value);
    if((parentalControl.checked && (age >= ageOfMajority)) || !parentalControl.checked){
        accept();
    } else{
        forbid();
    }
    inputAge.value = "";
}

submitButton.addEventListener('click', onSubmit);
