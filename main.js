const rootStyles = getComputedStyle(document.documentElement);

const NAV_TRANSPARENT = rootStyles.getPropertyValue('--nav-transparent');
const NAV_SOLID = rootStyles.getPropertyValue('--navbar-scroll-bg');

const nav = document.querySelector(".custom-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = NAV_SOLID;
  } else {
    nav.style.background = NAV_TRANSPARENT;
  }
});

document.addEventListener("DOMContentLoaded",function(){

const submitBtn=
document.getElementById("submitBtn");

submitBtn.addEventListener("click",function(e){

e.preventDefault();

let valid=true;

const name=document.getElementById("name");
const phone=document.getElementById("phone");
const email=document.getElementById("email");
const project=document.getElementById("projectType");
const message=document.getElementById("message");

const successMessage=
document.getElementById("successMessage");

const fields=[
name,
phone,
email,
project,
message
];

fields.forEach(field=>{

field.classList.remove("input-error");

field.nextElementSibling.textContent="";

});

successMessage.textContent="";

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
"Enter valid 10 digit number";

valid=false;

}

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

if(valid){

successMessage.textContent=
"Successfully Submitted!";

document.getElementById("contactForm").reset();

setTimeout(function(){

successMessage.textContent="";

},4000);

}

});

});