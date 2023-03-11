function ToplaES5(){
    var x=Number(document.getElementById("in1").value);
    var y=Number(document.getElementById("in2").value);
    var result=sum(x,y);
    document.getElementById("demo").innerHTML=result;
}
function sum(a,b){
    return a+b;
}

function ToplaES6(){
    var x=Number(document.getElementById("in1").value);
    var y=Number(document.getElementById("in2").value);
    var s=(x,y)=>{return x+y;};
    document.getElementById("demo").innerHTML=s(x,y);
}