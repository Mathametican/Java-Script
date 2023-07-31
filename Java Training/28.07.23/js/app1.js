function toplaEs5(a,b,c,d,e,f){

    document.getElementById("h3id").innerHTML=(a+b)*(c+d)*(e+f);

}

function ToplaEs6(...args){
    var sum=0;
    for(var i of args){
        sum+=i;  //sum=sum+i;

    }
    document.getElementById("h3idi").innerHTML=sum;

}