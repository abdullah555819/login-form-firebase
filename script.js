import { getAuth,createUserWithEmailAndPassword,sendEmailVerification,signInWithEmailAndPassword,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from "./firebase.mjs";
let email = document.getElementById("email")
let password = document.getElementById("pass")
let account = document.getElementById("acc")
let login = document.getElementById("login")
let changePassword = document.getElementById("change")


account.addEventListener("click",function(){
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });

})
login.addEventListener("click" , function(){
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user.emailVerified){

        alert("your email is verified")
        alert("your account is login")
        window.location.href = "dashboard.html"
    }
    else{
        alert("your email is not verified")
    }
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
    
    
  });
})

changePassword.addEventListener("click" , function(){
  sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

})