//document.getElementById('sonuc').innerHTML=Math.min(9,6);
//We create a function also it can find max and min value in a group of variable



function MaxFind(){
    
    var number1=Number(document.getElementById('in1').value);
    var number2=Number(document.getElementById('in2').value);
    var number3=Number(document.getElementById('in3').value);

    if(number1>number2 && number1>number3){
        document.getElementById('sonuc1').innerHTML="The maximum value is the :"+number1;
    }
    else if(number2>number1 && number2>number3){
        document.getElementById('sonuc1').innerHTML="The maximum value is the :"+number2;
    }
    else{
    document.getElementById('sonuc1').innerHTML="The maximum value is the : "+number3;
    }
}

function MinFind(){

    var number1=Number(document.getElementById('in1').value);
    var number2=Number(document.getElementById('in2').value);
    var number3=Number(document.getElementById('in3').value);

    if(number1<number2 && number1<number3){
        document.getElementById('sonuc1').innerHTML="The mimimum value is the : "+number1;
    }
    else if(number2<number1 && number2<number3){
        document.getElementById('sonuc1').innerHTML="The mimimum value is the : "+number2;
    }
    else{
    document.getElementById('sonuc1').innerHTML="The minimum value is the : "+number3;
    }
}