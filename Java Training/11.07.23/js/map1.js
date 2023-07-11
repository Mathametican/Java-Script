var a=new Map();   // a yeni bir map() bu bir metod
var b=new Map();

a.set(34,"İstanbul");  //a.set(... ,  ....) ile map e eleman ekliyoruz.
a.set(6,"Ankara");
a.set(35,"İzmir");
a.set(16,"Bursa");
a.set(73,"Şırnak");
a.set(78,"Karabük");
a.set(65,"Van");
a.set(8,"Artvin");
a.set(55,"Samsun");
a.set(71,"Kırıkkale");
a.set(19,"Çorum");
a.set(48,"Muğla");
a.set(61,"Trabzon");
a.set(1,"Adana");
document.getElementById("demo1").innerHTML=a.get(48);
document.getElementById("demo2").innerHTML=a.size;
document.getElementById("demo3").innerHTML=a.has(65);// a map inde 65 var mı diye soruyoruz.
document.getElementById("demo4").innerHTML=a.has(56);

a.delete(65);
document.getElementById("demo5").innerHTML=a.has(65);


b.set("2345kr23","Silgi");
b.set("2345kr34","Kurşun Kalem");
b.set("2345kr35","Pilot Kalem");
b.set("2345kr36","Basmalı Kalem");
b.set("2345kr37","Dolma Kalem");
b.set("2345kr38","Tükenmez Kalem");

console.log(b.get("2345kr23"));

for(var i=4; i<=8;i++){
    console.log(b.get("2345kr3"+i));
}
console.log(b.size);
console.log(b.has("2345kr36"));
console.log(b.has("2345kr39"));

b.delete("2345kr35");
console.log(b.has("2345kr35"));

