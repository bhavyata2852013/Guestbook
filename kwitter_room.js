
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC79qgP94nEX8BWZyhffC_oxZ4eWL8Lw8A",
      authDomain: "guestbook-7f55b.firebaseapp.com",
      databaseURL: "https://guestbook-7f55b-default-rtdb.firebaseio.com",
      projectId: "guestbook-7f55b",
      storageBucket: "guestbook-7f55b.appspot.com",
      messagingSenderId: "819492708832",
      appId: "1:819492708832:web:78ecd403d042e84eeccb85"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addroom() {
       room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",room_name);
      window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names:"+Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(room_name) {
      console.log("roomnamesthat got clicked"+ room_name);
      localStorage.setItem("roomname", room_name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("user_name");
      window.location="index.html";
}