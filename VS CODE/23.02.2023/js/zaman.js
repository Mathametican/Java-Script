function Showtime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var durum="AM";
    if(h>=12){
        durum="PM";
    }
    var time=h+":"+d+":"+s+"  "+durum;
    
    document.getElementById("dm").innerHTML=time;
    setTimeout(Showtime,1000) 
}
Showtime();