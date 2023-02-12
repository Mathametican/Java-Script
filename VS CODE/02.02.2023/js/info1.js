function Renk(){
    var a=document.getElementById("aa").style.color;
    
    if(a=="black"){
    document.getElementById("aa").style.color="red";
}else{
    document.getElementById("aa").style.color="black";
}
}
function Giris(){
   var x= document.getElementById("bb").value;
   document.getElementById("aa").innerHTML="Merhaba "+ x +" Web sayfama hoş geldiniz.";
}