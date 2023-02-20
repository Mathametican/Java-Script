function loginKontrol(){
    var e= document.getElementById("mail").value;
    var p= document.getElementById("sifre").value;

    if(e=="info@gmail.com" && p=="12345"){
        document.getElementById("demo").innerHTML="You Enter Successfully";
    }else{
        alert("You enter your email or password is wrong.");
    }
}