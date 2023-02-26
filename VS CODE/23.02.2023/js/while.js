var x=Math.floor(Math.random()*12);
var t=prompt("Please guess the number true");
while(parseInt(t)!=parseInt(x)){
    t=prompt("While Please Enter the your guess"+x);
}
alert("Congrulations You guess the number true");