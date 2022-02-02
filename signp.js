function signup(){
    var srNm = document.getElementById("nmNpt").value;
    var ml = document.getElementById("mlNpt").value;
    var pssWrd = document.getElementById("pssWrdNpt").value;
    

  
        localStorage.setItem("srNm", srNm);
        localStorage.setItem("ml", ml);
        localStorage.setItem("pssWrd", pssWrd);
        window.location = "min.html";
    
    

}

function show(){
    document.getElementById("btnLgn").disabled = false;
}

