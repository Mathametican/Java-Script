var x=document.getElementById("btnid");
var y=document.getElementById("h3id");

x.addEventListener("click",clickF);
x.addEventListener("mouseover",overF);
x.addEventListener("mouseout",outF);

function clickF(){
  y.innerHTML+="It is clicked"+"<br>";

}

function overF(){
    y.innerHTML+="Mouse is overed"+"<br>";
  
  }

  function outF(){
    y.innerHTML+="Mouse is outted"+"<br>";
  
  }