var soru=["1.Soru","2.Soru","3.Soru"];
var c=["1.Cevap","2.Cevap","3.Cevap"];
var k=0;
document.getElementById("h5").innerHTML=soru[k];

function Cevap(){
    document.getElementById("pp").innerHTML=c[k];
}

function ileri(){
    if(k==soru.length-1){
        alert("There is no more question.");
    }else{
    k++;
    document.getElementById("h5").innerHTML=soru[k];
    document.getElementById("pp").innerHTML="";
}
}

function Geri(){
    if(k<=0){
        alert("There is no more question."); 
    }else{
    k--;
    document.getElementById("h5").innerHTML=soru[k];
    document.getElementById("pp").innerHTML="";
    }    
}