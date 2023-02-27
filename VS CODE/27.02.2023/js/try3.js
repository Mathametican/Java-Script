function testtrycatch(){
    let x=document.getElementById("in1").value;
    let y=document.getElementById("pid");
    y.innerHTML="";
    y.style.color="red";
    try{
    if(x==""){
        throw "Input connot be Empty ";
    }
    if(x<5){
        throw "Input cannot be less than 5";
    }
    if(x>10){
        throw "Input cannot be greater than 10";
    }
    if(isNaN(x)){
        throw "Input must be a number";
    }
    if(x>=5 && x<=10){
        y.innerHTML="You did good job";
        y.style.color="green";
    }
    }catch(e){
    y.innerHTML=e;
    }
}