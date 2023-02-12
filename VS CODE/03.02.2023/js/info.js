function Kontrol(){
   //alert("Bu alana yapıştırma yapmamanız gerekiyor.");
   document.getElementById("hh").innerHTML="Bu alana yapıştırma yapmamanız gerekiyor.";
   document.getElementById("hh").style.color="red";
}
function MouseOver(){
    document.getElementById("pp").style.color="red";
    document.getElementById("pp").style.fontSize="100px";
    document.getElementById("pp").innerHTML="Hello";
}
function MouseOut(){
    document.getElementById("pp").style.color="blue";
    document.getElementById("pp").style.fontSize="25px";
    document.getElementById("pp").innerHTML="Merhaba";
    
}
function Kopyala(){
    alert("Lütfen Bilgileri Kopyalamayın....");
}
function CutKopyala(){
    alert("Lütfen Kesme işlemi yapmayınız.....");
}
