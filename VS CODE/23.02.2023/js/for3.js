document.write("<table border='50'><tr>");
for(var i=1; i<=15; i++){
    document.write("<td>");
    for(var x=1; x<=10;x++){
    document.write(i+'*'+x+'=' +i*x+'</br>');
    }
    document.write("</td>");
}
document.write("</tr></table>");