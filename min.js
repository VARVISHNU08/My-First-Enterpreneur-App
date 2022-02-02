
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

  function create(){
    

    document.getElementById("checkbox").style.display = "inline-block";
    



    
  }

    var count = 0;

  function decide(){
      document.getElementById("questn1").style.display = "inline-block";
      document.getElementById("sbmtBttn").style.display = "inline-block";
      document.getElementById("checkbox").style.display = "none";
      count = 10;
  }

  function decid1(){
      document.getElementById("questn1").style.display = "inline-block";
      document.getElementById("questn2").style.display = "inline-block";
      document.getElementById("sbmtBttn").style.display = "inline-block";
      document.getElementById("checkbox").style.display = "none";
      count = 15;
  }

  function decid2(){
      document.getElementById("questn1").style.display = "inline-block";
      document.getElementById("questn2").style.display = "inline-block";
      document.getElementById("questn3").style.display = "inline-block";
      document.getElementById("sbmtBttn").style.display = "inline-block";
      document.getElementById("checkbox").style.display = "none";
      count = 20;
    }
  
function submeet(){
  var folder = document.getElementById("mnFldrNpt").value;

  if(count == 10){
    var one = document.getElementById("question1").value;
    var two = document.getElementById("question2").value;
    var three = document.getElementById("question3").value;
    var four = document.getElementById("question4").value;
    var five = document.getElementById("question5").value;
    var six = document.getElementById("question6").value;
    var seven = document.getElementById("question7").value;
    var eight = document.getElementById("question8").value;
    var nine = document.getElementById("question9").value;
    var ten = document.getElementById("question10").value;

    var a1 = document.getElementById("answer1").value;
    var a2 = document.getElementById("answer2").value;
    var a3 = document.getElementById("answer3").value;
    var a4 = document.getElementById("answer4").value;
    var a5 = document.getElementById("answer5").value;
    var a6 = document.getElementById("answer6").value;
    var a7 = document.getElementById("answer7").value;
    var a8 = document.getElementById("answer8").value;
    var a9 = document.getElementById("answer9").value;
    var a10 = document.getElementById("answer10").value;


    firebase.database().ref("folder").child(folder).update({
       question1:one,
       question2:two,
       question3:three,
       question4:four,
       question5:five,
       question6:six,
       question7:seven,
       question8:eight,
       question9:nine,
       question10:ten,
       answer1:a1,
       answer2:a2,
       answer3:a3,
       answer4:a4,
       answer5:a5,
       answer6:a6,
       answer7:a7,
       answer8:a8,
       answer9:a9,
       answer10:a10
    });
  }

  if(count == 15){
    var one = document.getElementById("question1").value;
    var two = document.getElementById("question2").value;
    var three = document.getElementById("question3").value;
    var four = document.getElementById("question4").value;
    var five = document.getElementById("question5").value;
    var six = document.getElementById("question6").value;
    var seven = document.getElementById("question7").value;
    var eight = document.getElementById("question8").value;
    var nine = document.getElementById("question9").value;
    var ten = document.getElementById("question10").value;
    var eleven = document.getElementById("question11").value;
    var twelve = document.getElementById("question12").value;
    var thirteen = document.getElementById("question13").value;
    var fourteen = document.getElementById("question14").value;
    var fifteen = document.getElementById("question15").value;

    var a1 = document.getElementById("answer1").value;
    var a2 = document.getElementById("answer2").value;
    var a3 = document.getElementById("answer3").value;
    var a4 = document.getElementById("answer4").value;
    var a5 = document.getElementById("answer5").value;
    var a6 = document.getElementById("answer6").value;
    var a7 = document.getElementById("answer7").value;
    var a8 = document.getElementById("answer8").value;
    var a9 = document.getElementById("answer9").value;
    var a10 = document.getElementById("answer10").value;
    var a11 = document.getElementById("answer11").value;
    var a12 = document.getElementById("answer11").value;
    var a13 = document.getElementById("answer11").value;
    var a14 = document.getElementById("answer11").value;
    var a15 = document.getElementById("answer11").value;


    firebase.database().ref("/").child(folder).update({
       question1:one,
       question2:two,
       question3:three,
       question4:four,
       question5:five,
       question6:six,
       question7:seven,
       question8:eight,
       question9:nine,
       question10:ten,
       question11:eleven,
       question12:twelve,
       question13:thirteen,
       question14:fourteen,
       question15:fifteen,
       answer1:a1,
       answer2:a2,
       answer3:a3,
       answer4:a4,
       answer5:a5,
       answer6:a6,
       answer7:a7,
       answer8:a8,
       answer9:a9,
       answer10:a10,
       answer11:a11,
       answer12:a12,
       answer13:a13,
       answer14:a14,
       answer15:a15,
    });
  }

  if(count == 20){
    var one = document.getElementById("question1").value;
    var two = document.getElementById("question2").value;
    var three = document.getElementById("question3").value;
    var four = document.getElementById("question4").value;
    var five = document.getElementById("question5").value;
    var six = document.getElementById("question6").value;
    var seven = document.getElementById("question7").value;
    var eight = document.getElementById("question8").value;
    var nine = document.getElementById("question9").value;
    var ten = document.getElementById("question10").value;
    var eleven = document.getElementById("question11").value;
    var twelve = document.getElementById("question12").value;
    var thirteen = document.getElementById("question13").value;
    var fourteen = document.getElementById("question14").value;
    var fifteen = document.getElementById("question15").value;
    var sixteen = document.getElementById("question16").value;
    var seveteen = document.getElementById("question17").value;
    var eighteen = document.getElementById("question18").value;
    var nineteen = document.getElementById("question19").value;
    var twenty = document.getElementById("question20").value;

    var a1 = document.getElementById("answer1").value;
    var a2 = document.getElementById("answer2").value;
    var a3 = document.getElementById("answer3").value;
    var a4 = document.getElementById("answer4").value;
    var a5 = document.getElementById("answer5").value;
    var a6 = document.getElementById("answer6").value;
    var a7 = document.getElementById("answer7").value;
    var a8 = document.getElementById("answer8").value;
    var a9 = document.getElementById("answer9").value;
    var a10 = document.getElementById("answer10").value;
    var a11 = document.getElementById("answer11").value;
    var a12 = document.getElementById("answer12").value;
    var a13 = document.getElementById("answer13").value;
    var a14 = document.getElementById("answer14").value;
    var a15 = document.getElementById("answer15").value;
    var a16 = document.getElementById("answer16").value;
    var a17 = document.getElementById("answer17").value;
    var a18 = document.getElementById("answer18").value;
    var a19 = document.getElementById("answer19").value;
    var a20 = document.getElementById("answer20").value;


    firebase.database().ref("/").child(folder).update({
       question1:one,
       question2:two,
       question3:three,
       question4:four,
       question5:five,
       question6:six,
       question7:seven,
       question8:eight,
       question9:nine,
       question10:ten,
       question11:eleven,
       question12:twelve,
       question13:thirteen,
       question14:fourteen,
       question15:fifteen,
       question16:sixteen,
       question17:seveteen,
       question18:eighteen,
       question19:nineteen,
       question20:twenty,
       answer1:a1,
       answer2:a2,
       answer3:a3,
       answer4:a4,
       answer5:a5,
       answer6:a6,
       answer7:a7,
       answer8:a8,
       answer9:a9,
       answer10:a10,
       answer11:a11,
       answer12:a12,
       answer13:a13,
       answer14:a14,
       answer15:a15,
       answer16:a16,
       answer17:a17,
       answer18:a18,
       answer19:a19,
       answer20:a20
    });
  }
}