function fulldata1(){
    // alert("Full Data 1");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;   
    if(email == "" || password == ""){
        alert("Please fill in all fields");
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("User created successfully");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error: " + errorMessage);
    // ..
  });
    }
}