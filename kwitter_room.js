var firebaseConfig = {
    apiKey: "AIzaSyDh8u_aQ30QCTI-HAxHXa5cyt4R8xUCC4E",
    authDomain: "let-chat-web-app-b6a4b.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-b6a4b-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-b6a4b",
    storageBucket: "let-chat-web-app-b6a4b.appspot.com",
    messagingSenderId: "380645790987",
    appId: "1:380645790987:web:38be5cb397be516e82fe0e",
    measurementId: "G-4RDPDV2F55"
  };
  firebase = initializeApp(firebaseConfig);
  console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Rooms_names+" onclick='redirectToRoomName(this.id)' >#"+ Rooms_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

function addRoom()
{
  room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
 });

 localStorage.setItem("room_name", room_name);

window.location = "kwitter_room.html";
}
function redirectToRoomName(name)
{
 localStorage.setItem("room_name", name);
  window.location = "kwitter_room.html";
} 



function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
});});}
getData();
