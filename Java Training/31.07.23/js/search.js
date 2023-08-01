function searchF(){
    var t=document.getElementById("textareaId").value;
    var m=document.getElementById("inputId").value;
    var s=document.getElementById("pid");
    var r=t.includes(m);

    if(r==true && m!=""){
        s.innerHTML= m+" is included in the paragraph. ";
        s.style.color="green";
    }else if(m==""){
        alert("Please write a word into the input to search in the paragraph.");
        

    }
    else {
        s.innerHTML=m+" is not included in the paragraph.";
        s.style.color="red";
    }
}