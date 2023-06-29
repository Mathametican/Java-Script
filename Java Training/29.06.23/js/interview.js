var questions=["Where is the capital city of Türkiye ?","What are the colors of the Turkish flag ?","What is name of the Turkish national anthem ?"];
var answers=["Ankara","Red and White","Independent Anthem"];

var control=0;
function NextQuestion(){
control++;
document.getElementById('quesid').innerHTML=questions[control];
document.getElementById('ansid').innerHTML="";
}
function ShowAnswer(){
 document.getElementById('ansid').innerHTML=answers[control];
 }
function BackQuestion(){
 control--;
 document.getElementById('quesid').innerHTML=questions[control];
 document.getElementById('ansid').innerHTML="";
}

