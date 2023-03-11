var x=document.getElementById("btnid");
x.addEventListener("click",RUN1);
x.addEventListener("mouseover",RUN2);
x.addEventListener("mouseout",RUN3);

function RUN1(){
    document.getElementById("h3id").innerHTML+="Click is Running <br>";
}
function RUN2(){
    document.getElementById("h3id").innerHTML+="MouseOver is Running <br>";
}
function RUN3(){
    document.getElementById("h3id").innerHTML+="MouseOut is Running <br>";
}