





// Contact Form

const contact = document.querySelector('.contactform');

contact.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(contact);
    const data = Object.fromEntries(formData);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data
    );

    const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };


    fetch("https://getpantry.cloud/apiv1/pantry/c71cd673-64e5-44a9-b1ab-2bd00639c06c/basket/ContactForm", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result), document.getElementById("contactForm").style.display = "none", document.getElementById("formSubmit").innerText = "Thank You!", document.getElementById("formSubmit2").innerText = "We'll get back with you ASAP!")
    .catch(error => console.log('error', error));


 });


 // Contact form validation
    //Full Name

var fullName = document.getElementById('fullname');
var contactForm = document.getElementById('contactform');
let fullNameErr = document.getElementById('nameErr');

fullName.addEventListener('input', function(e) {
    let regex = /[A-Za-z]+ [A-Za-z]+/i;
    let currentValue = e.target.value;
    let valid = regex.test(currentValue);

    if(valid) {
        fullNameErr.style.display = 'none'
    } else {
        fullNameErr.style.display = 'block'
    }
})

 //E-mail

 let email = document.getElementById('email');
    
 let emailErr = document.getElementById('emailErr');

email.addEventListener('input', function(e) {
 let regex = /[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
 let currentValue = e.target.value;
 let valid = regex.test(currentValue);

 if(valid) {
     emailErr.style.display = 'none'
 } else {
     emailErr.style.display = 'block'
 }
})

  //phone number

  let phoneNum = document.getElementById('phonenum');
    
  let phoneNumErr = document.getElementById('phoneNumErr');

phoneNum.addEventListener('input', function(e) {
  let regex = /^([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?[0-9]+\d{9}$/i;
  let currentValue = e.target.value;
  let valid = regex.test(currentValue);

  if(valid) {
      phoneNumErr.style.display = 'none'
  } else {
      phoneNumErr.style.display = 'block'
  }
})


//Mailing List!
`use strict`

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email_address');
  const emailValue = email.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailValue)) {
    alert('Email is valid');
    form.submit();
  } else { 
    alert('Email is not valid');
  }

  console.log(form);
});
form.addEventListener('submit', function (e) {
  console.log(email_address);
});