function ToplaES5(){
    var x=Number(document.getElementById("in1").value);
    var y=Number(document.getElementById("in2").value);
    var result=sum(x,y);
    document.getElementById("demo").innerHTML=result;
}
function sum(a,b){
    return a+b;
}