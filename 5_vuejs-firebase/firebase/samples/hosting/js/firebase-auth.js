var input = document.querySelectorAll('input');
var button = document.querySelectorAll('button');
var log = document.querySelector('p');
// SNS Auth
var provider = new firebase.auth.GoogleAuthProvider();

var firebaseSignIn = function (event) {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(getEmail(), getPassword())
    .then(function(result) {
      log.innerHTML='Login Success'
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

var firebaseSignInWithGoogle = function (event) {
  event.preventDefault();
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

var firebaseSignUp = function () {
  if (exceptionHandler()) return true;
  firebase.auth().createUserWithEmailAndPassword(getEmail(), getPassword()).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  }).then(function (user) {
    console.log(user);
    log.innerText = "The account " + user.email + " has been registered in Authentication";
    clearForm();
  });
};

var firebaseSignOut = function () {
  // 할일 : Sign Out API 찾아서 기능 구현

};

var getEmail = function () {
  return input[0].value;
};

var getPassword = function () {
  return input[1].value;
};

var exceptionHandler = function () {
  if ( getEmail() === "" || getPassword() === "") {
    alert("enter the email and password");
    return true;
  }
  return false;
};

var clearForm = function () {
  input[0].value = "";
  input[1].value = "";
};

window.onload = function () {
  button[0].addEventListener('click', firebaseSignIn);
  button[1].addEventListener('click', firebaseSignInWithGoogle);
  button[2].addEventListener('click', firebaseSignUp);
};
