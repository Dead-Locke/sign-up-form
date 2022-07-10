const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const msg = document.querySelector('.mismatch');
const form = document.querySelector('form');
const vis_pw = document.querySelector('.material-icons.vis')
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const num = document.getElementById("number");
const len = document.getElementById("length");
const validation_box = document.getElementById("message");
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const phone_valid = document.getElementById('phone-valid');
const email_valid = document.getElementById('email-valid');

var lowerCase = /[a-z]/g;
var upperCase = /[A-Z]/g
var numbers = /[0-9]/g;
var emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneRgx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

function check_match() {
    if ((pass1.value == pass2.value) && (pass1.value != '')){
        pass1.classList.remove('error');
        pass2.classList.remove('error');
        msg.innerText = "Passwords Match!"
        msg.style.color = 'green';  
    } else {
        pass1.classList.add('error');
        pass2.classList.add('error');;
        msg.innerText = "Passwords Do Not Match.";
        msg.style.color = 'red';
    }
}

const submit = (e) => {
    e.preventDefault();
}

function show_element(elemID) {
    document.getElementById(`${elemID}`).style.display = "block";
}

function hide_element(elemID) {
    document.getElementById(elemID).style.display = "none";
}

function toggle_pw_visibility() {
    if(vis_pw.innerHTML === 'visibility') {
        vis_pw.innerHTML = 'visibility_off';
        pass1.type = 'text'
        pass2.type = 'text'
        return
    }
    vis_pw.innerHTML = 'visibility';
    pass1.type = 'password'
    pass2.type = 'password'
}


function validate_pw() {
    //validate at least 1 letter
    if(pass1.value.match(lowerCase)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //validate capitals
    if(pass1.value.match(upperCase)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } 
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

     //validate numbers
    if(pass1.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } 
    else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //validate length
    if(pass1.value.length >= 8) {
        len.classList.remove("invalid");
        len.classList.add("valid");
    } 
    else{
        len.classList.remove("valid");
        len.classList.add("invalid");
    }


}

function validate_email () {
    if(email.value.match(emailRgx)){
        email_valid.classList.remove('invalid');
        email_valid.classList.add('valid');
        email_valid.innerHTML = 'Valid E-mail!'
    }
    else{
        email_valid.classList.remove('valid');
        email_valid.classList.add('invalid');
        email_valid.innerHTML = 'Incorrect E-mail format'
    }
}

function validate_phone () {
    if(phone.value.match(phoneRgx)){
        phone_valid.classList.remove('invalid');
        phone_valid.classList.add('valid');
        phone_valid.innerHTML = 'Valid Phone Number!'
    }
    else{
        phone_valid.classList.remove('valid');
        phone_valid.classList.add('invalid');
        phone_valid.innerHTML = 'Incorrect phone number format'
    }
}


function add_formatting(p) {
    phone.value = p.value.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '($1)-$2-$3')
}


email.addEventListener('focus', () => {show_element('email-valid')})
email.addEventListener('keyup', validate_email)

phone.addEventListener('focus', () => {show_element('phone-valid')})
phone.addEventListener('keyup', validate_phone)
phone.addEventListener('keyup', () => {add_formatting(phone)})

pass1.addEventListener('keyup', validate_pw)
pass1.addEventListener('input', check_match)
pass2.addEventListener('input', check_match)
pass1.addEventListener('focus', () => {show_element('message')})
pass2.addEventListener('focus', () => {show_element('message')})
// pass1.addEventListener('blur', hide_pw_valid("message"))
// pass2.addEventListener('blur', hide_pw_valid("message"))

vis_pw.addEventListener('click', toggle_pw_visibility)
// vis_pw.addEventListener('click', () => {show_element('message')})
form.addEventListener('submit', submit)










