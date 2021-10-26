var firebaseConfig = {
    apiKey: "AIzaSyDJsjVzhKz4SJ9u4UyrNMn09v18UJiDyEQ",
    authDomain: "class-test-166b5.firebaseapp.com",
    projectId: "class-test-166b5",
    storageBucket: "class-test-166b5.appspot.com",
    messagingSenderId: "542271425575",
    appId: "1:542271425575:web:64d5bdcad320500f03d202"
};

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot)
{ document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    childData = childSnapshot.val();
    if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;



function getData(){firebase.database().ref("/"+room_name).on('value', function(snapshot)
{ document.getElementById("output").innerHTML = ";";
firebase_message_id = childKey;
       message_data = childData;
    
    
       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data["name"];
       message = message_data["message"];
    like = message_data["like"];
    name_with_tag = "<h4>" + name  + "<img class="user_tick" src="tick.png;"> </h4>";
    message_with_tag = "<h4 class="message_h4">" + message + "</h4>";
    like_button = "<button class="btn btn-warning" id="firebase_message_id +" value = "+like+" onclick="updateLike(this.id)">";
    span_with_tag = "<span class="glyphicon glyphicon-thumbs-up">Like:"+ like +"</span></button><hr>"
    
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML = row;

} });  }); }
getData()
