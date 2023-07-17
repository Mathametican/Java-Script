var a=document.getElementsByTagName("p");
// <p></p>  tag larının sadece ikincisinde işlem yapacaksak a[1] demeliyiz. Dizi gibi Document.getElementByTagName ile bunları a variablenın içine dizi olarak yerleştirdik.
a[1].style.color="red";
a[0].innerHTML="Yeni değişiklikler yapıldı.";

var b=document.getElementsByTagName("h1");
b[3].style.color="blue";
b[3].style.fontSize="100px";
b[2].style.fontSize="50px";
