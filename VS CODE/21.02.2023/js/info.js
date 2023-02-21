function demoKontrol(){
    var x=document.getElementById("demo").value;
    switch(x){
        case "1":
        document.getElementById("h1").innerHTML="Pazartesi";
        break;
        case "2":
        document.getElementById("h1").innerHTML="Salı";
        break;
        case "3":
        document.getElementById("h1").innerHTML="Çarşamba";
        break;
        case "4":
        document.getElementById("h1").innerHTML="Perşembe"; 
        break;
        case "5":
        document.getElementById("h1").innerHTML="Cuma";
        break;
        case "6":
        document.getElementById("h1").innerHTML="Cumartesi";
        break;
        case "7":
        document.getElementById("h1").innerHTML="Pazar";
    }
}