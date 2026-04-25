document.addEventListener("DOMContentLoaded",function(){

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault(); // stops redirect

let valid=true;


/* field references */
const name=document.getElementById("name");
const phone=document.getElementById("phone");
const email=document.getElementById("email");
const project=document.getElementById("projectType");
const message=document.getElementById("message");


const fields=[
name,
phone,
email,
project,
message
];


/* reset errors */
fields.forEach(field=>{

field.classList.remove("input-error");

field.nextElementSibling.textContent="";

});


/* empty check */
fields.forEach(field=>{

if(field.value.trim()===""){

field.classList.add("input-error");

field.nextElementSibling.textContent=
"This field cannot be empty";

valid=false;

}

});


const phoneValue=phone.value.trim();

if(
phoneValue!=="" &&
!/^\d{10}$/.test(phoneValue)
){

phone.classList.add("input-error");

phone.nextElementSibling.textContent=
"Phone number must be 10 digits";

valid=false;
}


/* email validation */
const emailPattern=
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(
email.value.trim()!=="" &&
!emailPattern.test(email.value)
){

email.classList.add("input-error");

email.nextElementSibling.textContent=
"Enter valid email address";

valid=false;

}


/* success */
if(valid){

alert("Successfully Submitted!");

form.reset();

}

});

});