function hesapla(){
    var v=parseInt(document.getElementById("not1").value);
    var f=parseInt(document.getElementById("not2").value);
    var s=parseInt((v*0.4)+(f*0.6));
    document.getElementById("result").innerHTML=s;
    if(s<50){
    document.getElementById("mesaj").innerHTML="Notunuz FF1 dersi geçmek için yeterli not alamadınız."
    }
    if(50<=s && s<60){
        document.getElementById("mesaj").innerHTML="Notunuz DF dersi koşullu olarak geçtiniz."    
    }
    if(60<=s && s<70){
        document.getElementById("mesaj").innerHTML="Notunuz CC, dersi geçtiniz."    
    }
    if(70<=s && s<80){
        document.getElementById("mesaj").innerHTML="Notunuz BB, dersi geçtiniz."    
    }
    if(80<=s && s<90){
        document.getElementById("mesaj").innerHTML="Notunuz BA, dersi geçtiniz."    
    }
    if(90<=s && s<=100){
        document.getElementById("mesaj").innerHTML="Notunuz AA, dersi geçtiniz."    
    }
    if(v<0 || v>100){
    document.getElementById("mesaj").innerHTML="Lütfen 0 ile 100 arasında bir değer giriniz. "    
    document.getElementById("result").innerHTML="Notunuz hesaplanamamaktadır.";
}
    if(f<0 || f>100){
        document.getElementById("mesaj").innerHTML="Lütfen 0 ile 100 arasında bir değer giriniz. "    
        document.getElementById("result").innerHTML="Notunuz hesaplanamamaktadır.";
    }
    }