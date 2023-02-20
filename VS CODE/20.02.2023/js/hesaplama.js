function Toplama(){
    var x=parseInt(document.getElementById("in1").value);
    var y=parseInt(document.getElementById("in2").value);
    document.getElementById("h5").innerHTML=x+y;
}
function Cikarma(){
    var x=parseInt(document.getElementById("in1").value);
    var y=parseInt(document.getElementById("in2").value);
    document.getElementById("h5").innerHTML=x-y;
}
    function Carpma(){
    var x=parseInt(document.getElementById("in1").value);
    var y=parseInt(document.getElementById("in2").value);
    document.getElementById("h5").innerHTML=x*y;
}   
function Bolme(){
    var x=parseInt(document.getElementById("in1").value);
    var y=parseInt(document.getElementById("in2").value);
    document.getElementById("h5").innerHTML=x/y;
}