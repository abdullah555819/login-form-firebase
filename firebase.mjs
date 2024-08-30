
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC7__JZtYdaw95624el95A8mE7rQm9YN1k",
    authDomain: "login-signup-39fcc.firebaseapp.com",
    projectId: "login-signup-39fcc",
    storageBucket: "login-signup-39fcc.appspot.com",
    messagingSenderId: "621449232729",
    appId: "1:621449232729:web:2dff39d443f5b240cacc48"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export{auth}

