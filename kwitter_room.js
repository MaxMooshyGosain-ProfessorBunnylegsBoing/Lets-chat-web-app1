var firebaseConfig = {
    apiKey: "AIzaSyDJsjVzhKz4SJ9u4UyrNMn09v18UJiDyEQ",
    authDomain: "class-test-166b5.firebaseapp.com",
    projectId: "class-test-166b5",
    storageBucket: "class-test-166b5.appspot.com",
    messagingSenderId: "542271425575",
    appId: "1:542271425575:web:64d5bdcad320500f03d202"
};



firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
  purpose: "adding user"
  });

  localStorage.setItem("user_name", user_name);
}

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name");
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room"
  });

  localStorage.setItem("room name", room_name);
  window.location = "kwitter_page.html";
}

function getData() 
{
  firebase.database().ref("/").on('value', 
  function(snapshot) {document.getElementById("output").innerHTML = "";
  Room_names = childkey();

  console.log("Room_Name-" + Room_names);
  row = "<div class="room_name" id="Room_names" onclick="redirectToRoomName(this.id)">"#" + Room_names + "</div><hr></hr>";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter_page.html";
}
