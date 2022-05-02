var  firebaseConfig = {
    apiKey: "AIzaSyDbUS1Sa8EHH-46UcacPNb6Va35yuvAwCQ",
    authDomain: "lets-chat-d5f61.firebaseapp.com",
    databaseURL: "https://lets-chat-d5f61-default-rtdb.firebaseio.com",
    projectId: "lets-chat-d5f61",
    storageBucket: "lets-chat-d5f61.appspot.com",
    messagingSenderId: "448059445335",
    appId: "1:448059445335:web:4be6b6e08ef59c14835312",
    measurementId: "G-T1HHBCDH2L"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });


      document.getElementById("msg").value = "";
}
