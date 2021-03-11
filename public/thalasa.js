// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBxO9q7pr9S_CiWU_-RZdXwqxRz0GuzwI",
  authDomain: "thalasa-4778f.firebaseapp.com",
  projectId: "thalasa-4778f",
  storageBucket: "thalasa-4778f.appspot.com",
  messagingSenderId: "183112536770",
  appId: "1:183112536770:web:8940997f8be78f6dc0615b",
  measurementId: "G-4QLFJ7XP6H"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();




  //Reference for form collection
  let formMessage = db.collection('contact');
  
  //listen for submit event//
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#mail').value;
    let message = document.querySelector('#message').value;
  
    //send message values
    sendMessage(name, lastName, email, message);
  
    //Show Alert Message
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase
  
  function sendMessage(name,lastName, email, message) {
    let newFormMessage = db.collection('contact').add({
    
      first_name: name,
      last_name: lastName,
      email: email,      
      message: message
    });
  }
 
  // Copyright Current Year
  var copy= document.getElementById('year')
  var d = new Date();
  year = d.getFullYear();
  copy.innerHTML= "©"+" "+year+"copyright :";
