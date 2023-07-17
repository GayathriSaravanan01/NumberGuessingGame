var random=Math.round(Math.random()*100);
var lives=10;
function submit()
{
    document.getElementById("b7").innerHTML=lives;
    var input=document.getElementById("b3").value;
    lives--;
    console.log(input,random);
    {
        if(input==random)
        {
            location.href="./win.html";
        }
        else if(input<random&&lives!=0)
        {
           document.getElementById("b8").innerHTML="Your Guess is Low!";
        }
        else if(input>random&&lives!=0)
        {
           document.getElementById("b8").innerHTML="Your Guess is High!";
        }
        else if(lives==0)
        {
            location.href="./lose.html";
        }
    }  
}
function again()
{
    location.href="./index.html";
}
function game()
{
    location.href="./game.html";
}