const y=[];

function Ekle(){
    var a=document.getElementById("yy").value 
    y.push(a+"<br>");
    document.getElementById("pp").innerHTML=y;
}

function Sil(){
    //pop enson ekleneni siler
    y.pop();
    document.getElementById("pp").innerHTML=y;
}