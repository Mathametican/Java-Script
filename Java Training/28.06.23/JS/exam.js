function Hesapla(){
    var vize=document.getElementById('vizeid').value;
    let final=document.getElementById('finalid').value;
    var result=(vize*0.4)+(final*0.6);
    document.getElementById('sonucid').innerHTML='Sonuc: '+result;
}