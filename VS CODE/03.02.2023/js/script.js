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

for(let i=0; i<=10; i++){
    console.log(i);
}










































































































































































