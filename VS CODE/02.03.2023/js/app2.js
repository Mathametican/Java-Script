function TagApp(){
    var x=document.getElementsByTagName("h3");
    var y=x.length;
    console.log(y);
    for(var i=0; i<=y; i++){
        x[i].innerHTML="test "+parseInt(i+1);
    }
}