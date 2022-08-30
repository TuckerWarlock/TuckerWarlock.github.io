function displayResult() 
{
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
}

function myFunction() 
{
    var x = document.getElementsByClassName("city");
        for (var i = 0; i < x.length; i++) 
        {
            x[i].style.display = "none";
        }
}
function styleButtonChange() {
    document.getElementById("list1").style.fontSize = "25px"; 
    document.getElementById("list1").style.color = "red";
    document.getElementById("list1").style.backgroundColor = "yellow";
}