function signup(){
    var srNm = document.getElementById("nmNpt").value;
    var ml = document.getElementById("mlNpt").value;
    var pssWrd = document.getElementById("pssWrdNpt").value;
    var pssWrdCnfrm = document.getElementById("pssWrdCnfrmNpt").value;

    if(pssWrd == pssWrdCnfrm){
        localStorage.setItem("srNm", srNm);
        localStorage.setItem("ml", ml);
        localStorage.setItem("pssWrd", pssWrd);
    }


}

function show(){
    document.getElementById("btnLgn").disabled = false;
}


