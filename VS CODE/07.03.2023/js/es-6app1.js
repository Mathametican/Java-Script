function topla1(x,y,a,b,c){
  document.getElementById("h3id").innerHTML=x+y+a+b+c;
}
function topla2(...args){
    var sum=0;
    for(var i of args){
        sum+=i;      //sum=sum+i;
    }
    document.getElementById("h2id").innerHTML=sum;
}
