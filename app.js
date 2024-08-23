// email: /^[a-zA0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,}$/;
// number: /^\d/ between 0-9;

let isQuerySelected = false;
let isContentChecked = false;

function validateform(event) {
  event.preventDefault();
  //   alert("sdfghj");

  // clear error messages
  const errors = document.querySelectorAll(".error");
  const inputs = document.querySelectorAll("input");
  let textArea = document.querySelector('.message');
  errors.forEach((error) => (error.textContent = ""));
  inputs.forEach((input) => input.classList.remove("invalid"));
  textArea.classList.remove('invalid');

  let isvalid = false;

  // first name validation
  const firstName = document.querySelector(".first-name");
  const firstNameErr = document.querySelector(".firstNameErr");

  if (firstName.value.trim() == "") {
    firstNameErr.textContent = "This field is required";
    firstName.classList.add("invalid");
    isvalid = true;
  } else if (/^\d/.test(firstName.value.trim())) {
    firstNameErr.textContent = "First name can not start with a number";
    firstName.classList.add("invalid");
    isvalid = true;
  }

  // last name validation
  const lastName = document.querySelector(".last-name");
  const lastNameErr = document.querySelector(".lastNameErr");

  if (lastName.value.trim() == "") {
    lastNameErr.textContent = "This field is required";
    lastName.classList.add("invalid");
    isvalid = true;
  } else if (/^\d/.test(lastName.value.trim())) {
    lastNameErr.textContent = "Last name can not start with a number";
    lastName.classList.add("invalid");
    isvalid = true;
  }

  // email validation
  const email = document.querySelector(".email");
  const emailErr = document.querySelector(".emailErr");
  const emailReg = /^[a-zA0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.value.trim() == "") {
    emailErr.textContent = "This field is required";
    email.classList.add("invalid");
    isvalid = true;
  } else if (!emailReg.test(email.value.trim())) {
    emailErr.textContent = "Email is invalid";
    email.classList.add("invalid");
    isvalid = true;
  }

  // query validation
  if (!isQuerySelected) {
    queryErr.textContent = "Please select a query type";
    isvalid = true;
  }

  // textarea validation
  const textarea = document.querySelector('#textarea');
  const textAreaErr = document.querySelector('.textAreaErr');

  if (textarea.value == '') {
    textAreaErr.textContent = 'This field is required';
    textarea.classList.add("invalid");
    isvalid = true
  }

//   checkbox validation
  if (!isContentChecked) {
    checkErr.textContent = 'To submit this form, please consent to bein contacted';
    // isvalid = true;
  }
  let timeout = null;
  if(!isvalid) {
    const success = document.querySelector('.success-message');
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      textArea.value = '';
      success.style.display = 'block';
    }, 500);
  }
}



const query1 = document.querySelector(".query1");
const query2 = document.querySelector(".query2");
const queryErr = document.querySelector(".queryErr");
const genImg = document.querySelector(".img-gen");
const supSup = document.querySelector(".img-sup");

query1.addEventListener("click", () => {
  query1.classList.add("selected");
  genImg.style.display = "block";
  query2.classList.remove("selected");
  genSup.style.display = "none";
  isQuerySelected = true;
});

query2.addEventListener("click", () => {
  query2.classList.add("selected");
  genSup.style.display = "block";
  query1.classList.remove("selected");
  genImg.style.display = "none";
  isQuerySelected = true;
});

const checkContent = document.querySelector('.check-container');
const checkImg = document.querySelector('.check-container > span > img');
const checkErr = document.querySelector('.checkErr')

checkContent.addEventListener('click', () => {
    checkImg.style.display = 'block';
}

);