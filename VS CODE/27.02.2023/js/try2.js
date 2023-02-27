function sayitest(){
    try{
    var x=parseInt(document.getElementById("in1").value);
    var y=parseInt(document.getElementById("in2").value);
    var z=x/y;
    document.getElementById("hid").innerHTML=z;
    
}catch(e){
    document.getElementById("hid").innerHTML=e;
}
}