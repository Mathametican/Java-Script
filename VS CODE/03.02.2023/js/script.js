// //operatorler
// var sonuc;
// const x=60;
// const y=12;
// let z=7;
// let t='9';
//    //Aritmatik Operatorler
// sonuc=x+y;
// sonuc=x-y;
// sonuc=x*y;
// sonuc=x/y;
// sonuc=x%y;  //% işareti burada mod
// sonuc=x%z;

// sonuc=z++;  // burada önce sayıyı alıyor  bir artırıyor ancak hafızada tutuyor.
// sonuc=++z;  // burada önce artırıyor sonra sayıyı alıyor yani ekrana yansıtıyor.
// sonuc=z--;
// sonuc=--z;
//    //Atama Operatorleri
// sonuc=x;
// sonuc +=x; // bu sonuc=sonuc + x;
// sonuc -=x; 
// sonuc *=x;
// sonuc /=x;
// sonuc %=x;
//    //Karşılaştırma Operatorleri
// sonuc =x==y;  // dogruysa true yanlış sa false
// z=9;
// sonuc =z==t;  // burada sadece degerleri kontrol ediyor.
// sonuc =z===t; // burada degerleri ve typeof lerı kontrol ediyor.
// sonuc = x!=y; 
// sonuc = z!==t;
// t=9;
// sonuc = z!=t;
// sonuc = z>t;
// sonuc = z<=t;
// sonuc = z>=t;
// z=5;
// sonuc = z<t;

// //Mantıksal Operatörler
// // && (and)   || (or)  // !(not)
// sonuc =(z>t) && (x>y);
// sonuc =(z>t) || (x>y);
// sonuc =!(z>t);


// //DATE Object
// var d=new Date();

// //Get methods
// console.log(d.getFullYear());
// console.log(d.getMonth()); //ocak ayı sıfırıncı indes olarak kabul ediliyor.
// console.log(d.getDay());   // pazar haftanın sıfırıncı günü sayılıyor.
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getDate());// ayın kacıncı günü olduğu burada geliyor.

// //set methods
// d.setFullYear(1986);
// d.setMonth(11);
// d.setDate(15);
// d.setHours(14);
// d.setMinutes(03);
// console.log(d);

//STRING METODS()
// const ad="Mustafa";
// const soyad="Filiz";

//var x=ad+'  '+soyad;
//var y=ad.concat(' ',soyad);

//var z=ad.length;
//var w=soyad.length

//var z=ad.toUpperCase();
//var w=soyad.toLowerCase();

//var y=x.indexOf('f');
//var z=x.indexOf('F');

//var y=x.substring(0,5);
//var z=x.slice(3,12);

//var y=x.replace("Mustafa","Mehtap");
//w3 schools javascript tutorial da daha fazlası var.

// JAVASCRIPT NUMBER METHOD

// var x=10;
// var y="10";
// y=Number("10");// Burada string bir ifadeyi numbera çevirdik.
// y=isNaN('10x');

//parseInt parseFloat

// var x=23.6456778;
// var y=parseInt(x);// parseInt metod ile alt tam sayıya yuvarlıyor.
// var z=parseFloat(x);

//precision fixed

// var x=23.6456778;
// var y=x.toPrecision(4);//toPrecision ile number string type çevriliyor.
// var z=x.toFixed(3);//virgulden sonra 3 tane yada sıfır tane alıyor.

// Math Metodları
// var x=23.6456778;
// var y=Math.PI;
// var z=Math.round(2.8);
// var w=Math.round(2.3);
// var e=Math.ceil(3.1);//yuvarlama işlemini yukarı dogru yapıyor.
// var r=Math.floor(5.9);// yuvarlama işlemini aşagı yönlü yapıyor.

// var x=64;
// var y=Math.sqrt(x);
// var z=Math.sqrt(36);
// var w=Math.pow(2,-5);//Math.pow(a,b); method a üstü b yi hesaplıyor.
// var e=Math.abs(-234);//Math.abs(); mutlak deger hesaplıyor.
// var r=Math.min(32,54,12,74,3,8,13,-34,43);
// var t=Math.max(32,54,12,74,3,8,13,-34,43);
// var u=Math.random()*100;// Burada virgullü sayı getirebiliyor.
// var o=Math.round(Math.random()*120+1); // bu metod ile random olarak 
// // gelen sayıları tam sayıya çevirebiliyoruz.+1 ile 120 dahil ettim.
// console.log(x);
// console.log(typeof x);
// console.log(y);
// console.log(typeof y);
// console.log(z);
// console.log(typeof z);
// console.log(w);
// console.log(typeof w);
// console.log(e);
// console.log(typeof e);
// console.log(r);
// console.log(typeof r);
// console.log(t);
// console.log(typeof t);
// console.log(u);
// console.log(typeof u);
// console.log(o);
// console.log(typeof o);


//ARRAYS
//  var country=['Türkiye','Almanya','Yunanistan','Fransa','Belçika'];
//  console.log(country);
// console.log(typeof country);
// console.log(country.length);

//var numbers=[15,25,35,29,5,14];
// console.log(numbers);
// console.log(numbers.length);

// var cn=['Türkiye',15,null,undefined,['Mustafa',36]];
// console.log(cn);
// console.log(typeof cn);

//GET ARRAYS
// console.log(country[0]);
// console.log(country[3]);

//SET ARRAYS
// country[1]='Danimarka';
// country[country.length]='İsveç';
// console.log(country);

//ADD ARRAY ITEMs
// country.push('İngiltere');
// country.push('Kanada');// push son kısma
// country.unshift('Slovakya'); //unshift baş kısımdan ekleme yapıyor
// console.log(country);

//REMOVE ARRAY ITEMS
// country.pop();// pop() listedeki son elemanı kaldırıyor.
// country.shift()// shift() listenin en başındakini kaldırıyor.
// console.log(country);

//REVERSE METOD
// country.reverse();// reverse() listenin sıralamasını baştan sona değiştiriyor.
// console.log(country);

//SORT METOD
// country.sort();//listeyi önce sayıya göre sıralıyor sonra alfabetik 
// console.log(country);//İngilizcede İ olmadığı için sona attı.

//CONCAT METOD

// console.log(country);
// console.log(numbers);

// var x=country.concat(numbers);
// console.log(x);

// x.sort();
// console.log(x);

//KOŞUL İFADELERİ  1- if else ifadeleri

// var ad = 'Serap';
// var age=36;
// var drivingLisence=true;

// // if( ad == 'Serap'){
// //     console.log('Benim adım Searp değil.....');
// // }
// // if( age == 36){
// //     console.log( '40 a sıfır eksik kaldı.....');
// // }
// // if(drivingLisence == true){
// //     console.log('Araba kullanabilirim..........');
// // }

// if(age >=18){
//     if(drivingLisence==true){
//         console.log('Merhaba '+ad+' Hanım Araç kullanabilirsiniz.');
//     }else{
//         console.log('Araç kullanabilmeniz için sürücü belgesi gerekmektedir.');
//     }
    

// }else{
//     console.log('Yaşınız 18\'den küçük olduğu için araç kullanamazsınız.');

// }

// switch-case STATEMENT  HER CASE den sonra BREAK kullanılmazsa 
// diğer caseleride console.log yapar.

// let category='Milk';
//  switch(category){
//     case 'Coffee':
//         console.log('Kahceniz hazırlanıyor....');
//         break;
//     case 'Coffee Milk':
//         console.log('Sütlü Kahveniz Hazırlanıyor....');
//         break;
//     default:
//         console.log('Hatalı kategory seçtiniz....');
//  }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day='Pazar';
//         console.log('Bugün günlerden '+day);
//         break;
//     case 1:
//         day='Pazartesi';
//         console.log('Bugün günlerden '+day); 
//         break;   
//     case 2:
//         day='Salı';
//         console.log('Bugün günlerden '+day);
//         break;
//     case 3:
//         day='Çarşamba';
//         console.log('Bugün günlerden '+day);
//         break;
//     case 4:
//         day='Perşembe';
//         console.log('Bugün günlerden '+day);
//         break;
//     case 5:
//         day='Cuma';
//         console.log('Bugün günlerden '+day);
//         break;
//     case 6:
//         day='Cumartesi';
//         console.log('Bugün günlerden '+day);
// }

// LOOPS

//1- While Loop

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//2- Do- While Loop

// let i=0;
// do{
//   console.log(i);
//   i++;
// }
// while(i<=10){
//      console.log('Do-While Loop is completed');
// }

//FOR LOOP

// for(let i=0; i<=10; i++){
//     if(i==2){
//         console.log('İki = '+i); 
//         //Burada iki tane 2 oldu.
//         //Bu sorunu continue ile aşacagız. 
//         //Atlayıp geçiyor.
//     }
//     console.log(i);
// }

// for(let i=0; i<=10; i++){
//     if(i==2){
//         console.log('İki = '+i); 
//         continue;
//     }
//     if(i==5){
//         console.log('Beş = '+i);
//         break;
//     }
//     console.log(i);
// }

// iç içe for döngüleri

// for(let i=10; i>0; i--){
// for(let j=5; j>=0; j--){
//     console.log(i*j);
// }
// }

//TEMPLATE LITERALS

//  const fullName='Kübra Sert';
//  const city='Ankara';
// const dateOfBirth='1996';

// let val=`Benim adım ${fullName}.
// ${city}'de yaşıyorum.
// ${2023-dateOfBirth} yaşındayım.`;

// let val=`${(2023- dateOfBirth)>35 ? ' Bu işe başvurmak için gerekli yaş şartını taşımıyorsunuz.' : 
// 'Bu işe başvurmak için gerekli şartları taşımaktasınız.'}`;

//  console.log(val);

//IF gibi kullanabiliyoruz. Tüm bu işlemleri Süslü parantez içerisinde yapacağız.

//OBJECT LITERALS
//let val;
// let person={
//     fullName: 'Mustafa',
//     lastName: 'Filiz',
//     age: 27,
//     hobbies: ['puzzle','Math','Reading Books'],
//     //Burada Object içinde object oluşturuyoruz.
//     address :{
//         city:'Ankara',
//         country: 'Türkiye'
//     },
//     dogumtarihi :function(){
//         return 2023 - this.age;
//     }
// }
//val=person;
//val=person.fullName;
//val=person.lastName;
//val=person.age;
//val=person.hobbies;
//val=person.hobbies[1];
//val=person.address;
//val=person.address.city;
//val=person.address.country;
//val=person.dogumtarihi();


// let people= [{
//     firstName:'Kübra',
//     lastName:'SERT',
//     age:36
// },
// {
//     firstName:'Aslı',
//     lastName:'Yıldız',
//     age:8
// }]
// val=people[1].firstName;
// console.log(val);
// console.log(people);
// console.log(typeof people);

//DİZİ VE NESNELERİN DÖNGÜDE KULLANILMASI

//let cars=['BMW','Volvo','Toyota','Ford'];
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

//Bu işlemi daha kısa olarak (for in metodu içerisinde de kullanabiliyoruz.)
//for in 
// for(let i in cars){
//     console.log(`index: ${i} , value: ${cars[i]}`);
// }
// forEach     for in den daha kısa ve kolay bir metod
// cars.forEach(function(items){
//     console.log(items);
// })

// Diziler için döngü oluşturmanın üç yolu
// let people=[{firstName:'Mustafa', lastName:'Filiz'},
// {firstName:'Selma',lastName:'Kaplan'}];

// for(let i=0;i<people.length;i++){
//     console.log(people[i].firstName);
// }

// for(let i in people){
//     console.log(`index: ${i}, Name:${people[i].firstName}, LastName:${people[i].lastName}`);
// }

// people.forEach(function(items){
//     console.log(items.firstName, items.lastName);
// })

//FUNCTIONS

// function karesiniAl(sayi){
//     return sayi*sayi;
// }
// let a=karesiniAl(13);
// console.log(a);

// function karelerToplam(sayi1,sayi2){
//     function kareAl(x){
//         return x*x;
//     }
//     return kareAl(sayi1)+kareAl(sayi2);
// }
// let a=karelerToplam(12,5);
// console.log(a);

//FUNCTION DECLARATION VS EXPRESSION

//1-FUNCTION DECLARATION

// function sum(a,b){
//     var c=a+b;
//     return c;
// }
// let x=sum(45,89);
// console.log(x);

//2-FUNCTION EXPRESSION
//Son zamanlarda bu daha yaygın olarak kullanılıyor.
// const sum=function(a,b){
//     var c= a+b;
//     return c;
// }
// console.log(sum(30,75));

//Eger a ve b tanımsızsa veya yazılmazsa hata vermemesi için

// const sum=function(a,b){
//     if(a===undefined){
//         a=0;
//     }
//     if(b=== undefined){
//         b=0;
//     }
//     var c=a+b;
//     return c;
// }
// console.log(sum(10));

//BU kadar if kullanmayalım diye baştan a ve b için default bir deger tanımlayabiliriz.

// const sum= function(a=0,b=0){
//     var c=a+b;
//     return c;
// }
// console.log(sum(12,13));
// console.log(12,);
// console.log(15);

//WINDOW OBJECT
// Tüm yazılanları baştan sona gösteriyor bu window
//let val;
// var a=10;
// function b(){
//     return 0;
// }
//val=window;
//alert
//alert('Merhaba');

//prompt
//var c=prompt('Bir Sayı Giriniz.....');

//confirm
// var d=confirm('Bu İşlemi Yapmak İstediğinizden Emin misiniz????');
// if(d==true){
//     console.log('Hakkınızda hayırlı olsun cesaretinizden dolayı tebrikler');
// }else{
//     console.log('Hakkınızda hayırlı olsun ama biraz cesur olursanız bizce sizin için daha iyi');
// }
// console.log(d);

//location    sayfanın tam olarak adresini getiriyor.

//val =window.location;
//val =window.location.href;
//val=window.location.hostname;
//val=window.location.host;
//val=window.location.protocol;
//console.log(val);

















































































































































































































































