var counter=0;
function add(){
    counter++;
    document.getElementById("demo").innerHTML=counter;
}
function sub(){
    counter--;
    document.getElementById("demo").innerHTML=counter;
}
function reset(){
    document.getElementById("demo").innerHTML=0;
}