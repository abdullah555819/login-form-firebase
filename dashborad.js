import { getAuth,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from "./firebase.mjs";

let sign = document.getElementById("sign")
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href = "index.html"      
    }
  });


sign.addEventListener("click" , function(){
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "index.html"
      }).catch((error) => {
        // An error happened.
      });

})