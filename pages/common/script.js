function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".dropBtn") && !e.target.matches(".dropDownLink")) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

function validateEmail(emailAdress) {
  let regexEmail = /.+\@.+\..*/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

function showName() {
  let email = document.getElementById("email");
  let parola = document.getElementById("parola");

  /*
  const formValues = { email: email.value, password: parola.value };
  console.log(formValues);
  */
  let tag1 = document.createElement("h1");
  tag1.setAttribute("id", "tagEmail");

  let tag2 = document.createElement("h1");
  tag2.setAttribute("id", "tagParola");

  let tagErr = document.createElement("h2");
  tagErr.setAttribute("id", "errId");

  let tagValidEmail = document.createElement("h2");
  tagValidEmail.setAttribute("id", "validEmailId");

  const tagEmailId = document.getElementById("tagEmail");
  const tagParolaId = document.getElementById("tagParola");
  const errMessage = document.getElementById("errId");
  const tagValidEmailLogIn = document.getElementById("validEmailId");

  if (tagEmailId && tagParolaId) {
    tagEmailId.remove();
    tagParolaId.remove();
  }

  if (errMessage) {
    errMessage.remove();
  }

  if (tagValidEmailLogIn) {
    tagValidEmailLogIn.remove();
  }

  let tagErrGol = true;

  if (email.value == "" || parola.value == "") {
    tagErr.appendChild(
      document.createTextNode("Toate campurile sunt obligatorii")
    );
    document.getElementById("htmlInputs").appendChild(tagErr);
    tagErrGol = false;
  }
  if (validateEmail(email.value) == false && email.value != "") {
    tagValidEmail.appendChild(
      document.createTextNode("Acesta nu e un email valid")
    );
    document.getElementById("htmlInputs").appendChild(tagValidEmail);
  }

  if (tagErrGol == true && validateEmail(email.value) == true) {
    tag1.appendChild(document.createTextNode(email.value));
    tag2.appendChild(document.createTextNode(parola.value));
    document.getElementById("htmlInputs").appendChild(tag1);
    document.getElementById("htmlInputs").appendChild(tag2);
  }
}

function registerInfo() {
  let numeReg = document.getElementById("nume");
  let prenumeReg = document.getElementById("prenume");
  let emailReg = document.getElementById("emailRegister");
  let parolaReg = document.getElementById("parolaRegister");
  let repetaParolaReg = document.getElementById("repetaParolaRegister");
  /*
  const registerValues = {
    lastName: numeReg.value,
    firstName: prenumeReg.value,
    email: emailReg.value,
    password: parolaReg.value,
    repeatPassword: repetaParolaReg.value,
  };

  console.log(registerValues);
  */
  let tag1 = document.createElement("h2");
  tag1.setAttribute("id", "tagNume");

  let tag2 = document.createElement("h2");
  tag2.setAttribute("id", "tagPrenume");

  let tag3 = document.createElement("h2");
  tag3.setAttribute("id", "tagEmailReg");

  let tag4 = document.createElement("h2");
  tag4.setAttribute("id", "tagParolaReg");

  let tag5 = document.createElement("h2");
  tag5.setAttribute("id", "tagRepetaParolaReg");

  let tagErr = document.createElement("h2");
  tagErr.setAttribute("id", "errId");

  let tagEqPassword = document.createElement("h2");
  tagEqPassword.setAttribute("id", "eqPasswordId");

  let tagValidEmail = document.createElement("h2");
  tagValidEmail.setAttribute("id", "validEmailId");

  const tagNumeReg = document.getElementById("tagNume");
  const tagPrenumeReg = document.getElementById("tagPrenume");
  const tagEmailReg = document.getElementById("tagEmailReg");
  const tagParolaReg = document.getElementById("tagParolaReg");
  const tagRepetaParolaReg = document.getElementById("tagRepetaParolaReg");
  const tagErrReg = document.getElementById("errId");
  const tagEqPasswordReg = document.getElementById("eqPasswordId");
  const tagValidEmailReg = document.getElementById("validEmailId");

  if (
    tagNumeReg &&
    tagPrenumeReg &&
    tagEmailReg &&
    tagParolaReg &&
    tagRepetaParolaReg
  ) {
    tagNumeReg.remove();
    tagPrenumeReg.remove();
    tagEmailReg.remove();
    tagParolaReg.remove();
    tagRepetaParolaReg.remove();
  }

  if (tagErrReg) {
    tagErrReg.remove();
  }

  if (tagEqPasswordReg) {
    tagEqPasswordReg.remove();
  }

  if (tagValidEmailReg) {
    tagValidEmailReg.remove();
  }

  let tagErrGol = true;
  let tagEqPasswordGol = true;

  if (
    numeReg.value == "" ||
    prenumeReg.value == "" ||
    emailReg.value == "" ||
    parolaReg.value == "" ||
    repetaParolaReg.value == ""
  ) {
    tagErr.appendChild(
      document.createTextNode("Toate campurile sunt obligatorii")
    );
    document.getElementById("htmlInputsRegister").appendChild(tagErr);
    tagErrGol = false;
  }
  if (parolaReg.value != repetaParolaReg.value) {
    tagEqPassword.appendChild(
      document.createTextNode("Parola si Repeta parola trebuie sa fie egale")
    );
    document.getElementById("htmlInputsRegister").appendChild(tagEqPassword);
    tagEqPasswordGol = false;
  }

  if (validateEmail(emailReg.value) == false && emailReg.value != "") {
    tagValidEmail.appendChild(
      document.createTextNode("Acesta nu e un email valid")
    );
    document.getElementById("htmlInputsRegister").appendChild(tagValidEmail);
  }

  if (
    tagErrGol == true &&
    tagEqPasswordGol == true &&
    validateEmail(emailReg.value) == true
  ) {
    tag1.appendChild(document.createTextNode(numeReg.value));
    tag2.appendChild(document.createTextNode(prenumeReg.value));
    tag3.appendChild(document.createTextNode(emailReg.value));
    tag4.appendChild(document.createTextNode(parolaReg.value));
    tag5.appendChild(document.createTextNode(repetaParolaReg.value));

    document.getElementById("htmlInputsRegister").appendChild(tag1);
    document.getElementById("htmlInputsRegister").appendChild(tag2);
    document.getElementById("htmlInputsRegister").appendChild(tag3);
    document.getElementById("htmlInputsRegister").appendChild(tag4);
    document.getElementById("htmlInputsRegister").appendChild(tag5);
  }
}
