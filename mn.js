
var firebaseConfig = {

  apiKey: "AIzaSyCJnQjGTPibzgc9uj_Vt5SD9JA0LsLXaFc",

  authDomain: "my-first-enterpreneur-ap-69801.firebaseapp.com",

  databaseURL: "https://my-first-enterpreneur-ap-69801-default-rtdb.firebaseio.com",

  projectId: "my-first-enterpreneur-ap-69801",

  storageBucket: "my-first-enterpreneur-ap-69801.appspot.com",

  messagingSenderId: "812851393964",

  appId: "1:812851393964:web:549f02fc83c6e88a9d7609"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function fetch(){
  var folder = document.getElementById("mnCdNPt").value;
     firebase.database().ref("folder").child(folder).once('value',
     function(allRecords){
         allRecords.forEach(
           function(currentRecord){
             var ganesh = currentRecord.val().question;
           }
         );
     });
}