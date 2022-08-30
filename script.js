//functions for website

var styleFlag = true;

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

    if (styleFlag){
        document.getElementById("pageId").style.fontSize = "25px"; 
        document.getElementById("pageId").style.color = "red";
        document.getElementById("pageId").style.backgroundColor = "darkgrey";    
        styleFlag = false;
    }
    else{
        document.getElementById("pageId").style.fontSize = null; 
        document.getElementById("pageId").style.color = null;
        document.getElementById("pageId").style.backgroundColor = null;    
        styleFlag = true;
    }
}

