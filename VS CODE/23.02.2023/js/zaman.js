function Showtime(){
    var date=new Date();
    var h=date.getHours();
    var d=date.getMinutes();
    var s=date.getSeconds();
    var durum="AM";
    if(h>=12){
        durum="PM";
    }
    var time=h+":"+d+":"+s+"  "+durum;
    
    document.getElementById("demo").innerHTML=time;
    setTimeout(Showtime,5000) // 5 Saniye geçince ekranı değiştiriyor yoksa  direkt
}
Showtime();