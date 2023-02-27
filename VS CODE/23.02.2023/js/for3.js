document.write("<h1 style='font-size:25px; color:blue'>ÇARPIM TABLOSU: </h1>");
document.write("<table border='10' style='font-size:20px; color:red; background:yellow' > <tr>");
for(var i=1; i<=15; i++){
    document.write("<td>");
    for(var x=1; x<=15;x++){
    document.write(i+'*'+x+'=' +i*x+'</br>');
    }
    document.write("</td>");
}
document.write("</tr></table>");