var x=document.getElementById("divid");
x.addEventListener("mousemove",Random);
x.addEventListener("click",Closerandom);

function Random(){
    document.getElementById("pid").innerHTML=parseInt(Math.random()*1000);
}

function Closerandom(){
    //document.getElementById("divid").removeEventListener("mousemove",Random);
    x.removeEventListener("mousemove",Random);
}