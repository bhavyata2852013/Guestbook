//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data['user'];
like = message_data['like'];
message = message_data['message'];

name_with_tag = "<h4>"+name+"<img src = 'tick.png' class='user_tick'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {
      console.log("button clicked is-"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+ 1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("user_name");
      window.location="index.html";
}



function send() {
      user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("roomname");
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            user:user_name,
            message:msg,
            like:0
      });
}