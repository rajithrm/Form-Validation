let nameError=document.getElementById('name-error');
let emailError=document.getElementById('email-error');
let passError=document.getElementById('pass-error');
let cpassError=document.getElementById('cpass-error');
let phoneError=document.getElementById('phone-error');
let dobError=document.getElementById('dob-error');
let submitError=document.getElementById('submit-error');



document.addEventListener("DOMContentLoaded",()=>{
    const setMinutes = 1;
    let time = setMinutes * 60;
    const display = document.getElementById("count");

    const id = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        display.innerHTML = `${minutes}:${seconds}`;
        if (time <= 0) {
            clearInterval(id); 
            location.reload();
        } else {
            time--;
        }
    }, 1000);
});



function validateName(){
    let name= document.getElementById('contact-name').value;
    let inputnameBorder = document.getElementById('contact-name')
    console.log(name);
    
    if (name.length==0){
        nameError.innerHTML = '*Name is required';
        inputnameBorder.style.borderBottom = '2px solid red';
        return false;
    }   
    if (!name.match(/^[a-zA-Z]{3}/)){
        console.log(name);
        nameError.innerHTML = '*must be atleast 3 character long';
        inputnameBorder.style.borderBottom = '2px solid red';
        return false;
    }

    if(name.length>=20){
        nameError.innerHTML = '*Name should not exceed 20 letters';
        inputnameBorder.style.borderBottom = '2px solid red';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]|[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '*Write Full name';
        inputnameBorder.style.borderBottom = '2px solid red';

        return false;
    }

    nameError.innerHTML = '';
    // nameError.innerHTML = '<img src="./images/verified-badge-fill.png"></img>'
    inputnameBorder.style.borderBottom = '2px solid green';
    return true; 
}

function validateDate() {
    let inputDate = document.getElementById("contact-date").value;
    let inputdateBorder = document.getElementById('contact-date')
 console.log("inputDate");
 
    let currentDate = new Date();
    
   
    let formattedDate = new Date(inputDate);

    if(inputDate==0){
        dobError.innerHTML = "*you should be fill this field";
        inputdateBorder.style.borderBottom = '2px solid red';
        return false;
    }
   
    if (formattedDate > currentDate) {
        dobError.innerHTML = "Date cannot be beyond today's date.";
        inputdateBorder.style.borderBottom = '2px solid red';
        return false;
    }
    else{
    console.log("Validation successful");
    dobError.innerHTML = '';
    // dobError.innerHTML = '<img src="./images/verified-badge-fill.png"></img>'; 
    inputdateBorder.style.borderBottom = '2px solid green';
    
    return true;
}
}

function validatePhone(){
    let phone = document.getElementById('contact-phone').value;
    let inputphoneBorder = document.getElementById('contact-phone')

    if (phone.length==0){
        phoneError.innerHTML = '*phone number is required';
        inputphoneBorder.style.borderBottom = '2px solid red';
        return false;
    }
     else if (!phone.match(/^\+?[0-9()-]{3,20}$/)){
        phoneError.innerHTML = '*Only digits please';
        inputphoneBorder.style.borderBottom = '2px solid red';
        return false;
    }
    else if (phone.length !=10){
        phoneError.innerHTML = '*Phone number should be 10 digit';
        inputphoneBorder.style.borderBottom = '2px solid red';
        return false;
    }
    phoneError.innerHTML = '';
    // phoneError.innerHTML = '<img src="./images/verified-badge-fill.png"></img>'
    inputphoneBorder.style.borderBottom = '2px solid green';
    return true; 
}

function validateEmail(){
    let email = document.getElementById('contact-email').value;
    let inputEmailBorder = document.getElementById('contact-email')

    if (email.length==0){
        emailError.innerHTML='*Email is required';
        inputEmailBorder.style.borderBottom = '2px solid red';
        return false;
    }

    else if(email.length>=20){
        emailError.innerHTML = '*Email should be within 20 letters';
        inputEmailBorder.style.borderBottom = '2px solid red';
        return false;
    }

    else if(!email.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = '*Email Invalid';
        inputEmailBorder.style.borderBottom = '2px solid red';
        return false;
    }
    emailError.innerHTML = '';
    // emailError.innerHTML = '<img src="./images/verified-badge-fill.png"></img>';
    inputEmailBorder.style.borderBottom = '2px solid green';
    return true;
}

// function validatePass(){
    // let pass = document.getElementById('contact-pass').value;

    // if (pass.length == 0){
    //     passError.innerHTML = '*Password should be required'
    //     return false;
    // }
    // else if (!pass.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
    //     passError.innerHTML = '*At least one uppercase letter. <br> *At least one lowercase letter. <br> *At least one special character from the set @$!%*?&. <br> *Minimum length of 8 characters.'
    //     return false;
    // }

     
function validatePass() {
    const inputPassword1 = document.getElementById('contact-pass').value;
    const inputPasswordBorder = document.getElementById('contact-pass')
    // const inputPasswordBorder = document.querySelector(".password1Input");
    // const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;
  // Define your maximum password length here
  const maxLength = 20;
 
  // Check for minimum length
  if (inputPassword1.length < 8) {
      passError.innerHTML = "Password should be at least 8 characters long.";
      inputPasswordBorder.style.borderBottom = '2px solid red';
      return false;
  }

 
  if (inputPassword1.length > maxLength) {
      passError.innerHTML = "Password length should not exceed " + maxLength + " characters.";
      inputPasswordBorder.style.borderBottom = '2px solid red';
      return false;
  }

  
  else if (!/[A-Z]/.test(inputPassword1)) {
      passError.innerHTML = "Password should contain at least one uppercase letter.";

      inputPasswordBorder.style.borderBottom = '2px solid red';

      return false;
  }

  
  else if (!/[a-z]/.test(inputPassword1)) {
      passError.innerHTML = "Password should contain at least one lowercase letter.";


      inputPasswordBorder.style.borderBottom = '2px solid red';
      return false;
  }

  
  else if (!/\d/.test(inputPassword1)) {
      passError.innerHTML = "Password should contain at least one digit.";
      inputPasswordBorder.style.borderBottom = '2px solid red';
      return false;
  }

    
  else if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputPassword1)) {
      passError.innerHTML = "Password should contain at least one special character.";
      
      inputPasswordBorder.style.borderBottom = '2px solid red';
      return false;
      
  }else{



    // passError.innerHTML = '<img src="./images/verified-badge-fill.png"></img>'
    passError.innerHTML = '';
    inputPasswordBorder.style.borderBottom = '2px solid green';
    return true;
  }
  
}

function validateCpass(){
    let cpass = document.getElementById('contact-cpass').value;
    let prepass = document.getElementById('contact-pass').value;
    let inputconfirmpassBorder = document.getElementById('contact-cpass')

    if (cpass !== prepass){
        cpassError.innerHTML = '*Should be same as password for confirming';
        inputconfirmpassBorder.style.borderBottom = '2px solid red';
        return false;
    }
    // cpassError.innerHTML = '<img src="./images/verified-badge-fill.png"></img>';
    cpassError.innerHTML = '';
    inputconfirmpassBorder.style.borderBottom = '2px solid green';
    return true;
}

function validateForm(){
    let inputsubmitButton = document.getElementById('sub');
    let form= document.getElementById('form');

    if(!validateName() || !validateDate() || !validateEmail() || !validatePhone() || !validatePass() || !validateCpass() ){
        submitError.innerHTML = '*please fill all the required field using correct format'
        inputsubmitButton.style.backgroundColor = 'red';

        setTimeout(function() {
            submitError.innerHTML = ''; // Clear the error message
            
        }, 5000);

        return false;
    }
    
    inputsubmitButton.style.backgroundColor = 'green';
    document.getElementById("form").reset();
    console.log('hello')

    submitError.style.font='green';
    submitError.innerHTML = 'Signup Successfully';

   
    setTimeout(function() {
        location.reload();
    }, 2000);

    return true;
}

let form= document.getElementById('form')

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateForm();
})

const passwordInput = document.getElementById('contact-pass');
const eyeIcon = document.getElementById('eye');

function togglePasswordVisibility() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

const passwordInput1 = document.getElementById('contact-cpass');
const eyeIcon1 = document.getElementById('eye1');

function togglePasswordVisibility1() {
    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text';
        eyeIcon1.classList.remove('fa-eye');
        eyeIcon1.classList.add('fa-eye-slash');
    } else {
        passwordInput1.type = 'password';
        eyeIcon1.classList.remove('fa-eye-slash');
        eyeIcon1.classList.add('fa-eye');
    }
}


