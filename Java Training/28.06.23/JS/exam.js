function Hesapla(){
    var vize=Number(document.getElementById('vizeid').value);
    let final=Number(document.getElementById('finalid').value);
    var result=(vize*0.4)+(final*0.6);
    document.getElementById('sonucid').innerHTML='Sonuc: '+result;
}