function Toplama(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("h5").innerHTML=Number(x)+Number(y);
}
function Cikarma(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("h5").innerHTML=Number(x)-Number(y);
}
function Carpma(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("h5").innerHTML=Number(x)*Number(y);
}
function Bolme(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("h5").innerHTML=Number(x)/Number(y);
}