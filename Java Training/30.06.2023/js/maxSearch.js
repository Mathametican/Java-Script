//document.getElementById('sonuc').innerHTML=Math.min(9,6);
//We create a function also it can find max and min value in a group of variable

function MaxFind(){
    var number1=document.getElementById('in1').value;
    var number2=document.getElementById('in2').value;

    if(number1>number2){
        document.getElementById('sonuc1').innerHTML="The maximum value is the :"+number1;
    }
    else if(number1==number2){
        document.getElementById('sonuc1').innerHTML="The Numbers are equal."
    }
    else{
    document.getElementById('sonuc1').innerHTML="The maximum value is the : "+number2;
    }
}

function MinFind(){
    var number1=document.getElementById('in1').value;
    var number2=document.getElementById('in2').value;

    if(number1<number2){
        document.getElementById('sonuc1').innerHTML="The mimimum value is the :"+number1;
    }
    else if(number1==number2){
        document.getElementById('sonuc1').innerHTML="The Numbers are equal."
    }
    else{
    document.getElementById('sonuc1').innerHTML="The minimum value is the : "+number2;
    }
}