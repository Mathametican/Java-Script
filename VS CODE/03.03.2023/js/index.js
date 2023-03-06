function Kontrol(){
    var x=document.getElementById("colorid").value;
    document.getElementById("navid").style.background=x;
}
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    var all="";
    var x=0;
    for(var i=0;i<data.length;i++){
    x++;
     all+="<tr>"+
     "<th>"+x+"</th>"+
     "<td>"+data[i].name+"</td>"+
     "<td>"+data[i].username+"</td>"+
     "<td>"+data[i].email+"</td>"+
      "</tr>"   
    }
    document.getElementById("tableid").innerHTML=all;
});