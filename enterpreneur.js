function login(){
    var srNm = document.getElementById("nmNpt").value;
    var pssWrd = document.getElementById("pssWrdNp").value;
    var SrNm = localStorage.getItem("srNm");
    var PssWrd = localStorage.getItem("pssWrd");

    if(srNm == SrNm && pssWrd == PssWrd){
        window.location = "min.html";
    }
    else{
        document.getElementById("kgd").style.display = "inline-block"
    }
    
}