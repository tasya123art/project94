var firebaseConfig = {
    apiKey: "AIzaSyA-yDRU8P7dhgMvW1YoSAS0M2VJdaahvqE",
    authDomain: "project93-188fc.firebaseapp.com",
    databaseURL: "https://project93-188fc-default-rtdb.firebaseio.com",
    projectId: "project93-188fc",
    storageBucket: "project93-188fc.appspot.com",
    messagingSenderId: "1035957352418",
    appId: "1:1035957352418:web:31f6ee86f7ef5e32cd2bbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  function addUser() 
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      }); 
  }