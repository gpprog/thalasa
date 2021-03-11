  // Initialize Firebase(2)
  const firebaseConfig = {
    apiKey: "AIzaSyBBxO9q7pr9S_CiWU_-RZdXwqxRz0GuzwI",
    authDomain: "thalasa-4778f.firebaseapp.com",
    projectId: "thalasa-4778f",
    storageBucket: "thalasa-4778f.appspot.com",
    messagingSenderId: "183112536770",
    appId: "1:183112536770:web:8940997f8be78f6dc0615b",
    measurementId: "G-4QLFJ7XP6H"
  };
  var db = firebase.firestore();

  firebase.initializeApp(firebaseConfig);



  
  //Reference for form `collection`(3)
  let formMessage = firebase.firestore().ref('contact');
  
  //listen for submit event//(1)
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
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name,lastName, email, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      last_name: lastName,
      email: email,      
      message: message
    });
  }