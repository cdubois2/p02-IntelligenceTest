var score = 0;

function calculateScore(){
  var totalScore = Number(getCookie("firstQ")) + Number(getCookie("secondQ")) + Number(getCookie("thirdQ"));
  var temp = 10 * totalScore/3;
  temp.toFixed(2);
  document.getElementById("exeter").innerHTML = "Your results are: " + temp + "%";
}

function validateFirst() 
{ 
  var valueOne = document.getElementById("first_value").value;
  if(valueOne == "1101A")
  {
    document.getElementById("first_group").classList.add("has-success");
    document.getElementById("first_group").classList.remove("has-error");
    document.getElementById("first_error").innerHTML="Correct! Click me to continue!";
    score++;
    setCookie("firstQ",score,10);
    document.getElementById("first_error").onclick = function () {
        location.href = "q2.html"; 
    }
  }
  else if(valueOne.length < 5 || valueOne.length > 5)
  {
    document.getElementById("first_error").innerHTML="Answer must be 5 characters long. Click me to continue.";
    document.getElementById("first_error").classList.remove("hidden-message");
    document.getElementById("first_error").classList.add("shown-message");  
    document.getElementById("first_group").classList.add("has-error");
    document.getElementById("first_group").classList.remove("has-success");
    document.getElementById("first_error").onclick = function () {
        location.href = "q2.html";
    }
  }
  else
  {
    document.getElementById("first_error").innerHTML="Wrong. Click me to continue.";
    document.getElementById("first_group").classList.add("has-error");
    document.getElementById("first_group").classList.remove("has-success");
    document.getElementById("first_error").onclick = function () {
        location.href = "q2.html";
    }
  }
}

function validateSecond() 
{
  var valueOne = document.getElementById("first_value").value;
  if(valueOne == "CCCCDDDEFEDDDCCCC")
  {
    document.getElementById("first_group").classList.add("has-success");
    document.getElementById("first_group").classList.remove("has-error");
    document.getElementById("first_error").innerHTML="Correct! Click me to continue!";
    score++;
    setCookie("secondQ",score,10);
    document.getElementById("first_error").onclick = function () {
        location.href = "q3.html";
    }   
  }
  else if(valueOne.length < 13 || valueOne.length > 13)
  {
    document.getElementById("first_error").innerHTML="Answer must be 13 characters long. Click me to continue.";
    document.getElementById("first_error").classList.remove("hidden-message");
    document.getElementById("first_error").classList.add("shown-message");  
    document.getElementById("first_group").classList.add("has-error");
    document.getElementById("first_group").classList.remove("has-success");
    document.getElementById("first_error").onclick = function () {
        location.href = "q3.html";
    }
  }
  else
  {
    document.getElementById("first_error").innerHTML="Wrong. Click me to continue.";
    document.getElementById("first_group").classList.add("has-error");
    document.getElementById("first_group").classList.remove("has-success");
    document.getElementById("first_error").onclick = function () {
        location.href = "q3.html";
    }
  }
}

function validateThird() 
{
  var valueOne = document.getElementById("first_value").value;
  if(valueOne == "16D")
  {
    document.getElementById("first_group").classList.add("has-success");
    document.getElementById("first_group").classList.remove("has-error");
    document.getElementById("first_error").innerHTML="Correct! Click me to continue!";
    score++;
    setCookie("thirdQ",score,10);
    document.getElementById("first_error").onclick = function () {
        location.href = "results.html";
    }
  }
  else if(valueOne.length < 3 || valueOne.length > 3)
  {
    document.getElementById("first_error").innerHTML="Answer must be 3 characters long. Click me to continue.";
    document.getElementById("first_error").classList.remove("hidden-message");
    document.getElementById("first_error").classList.add("shown-message");  
    document.getElementById("first_group").classList.add("has-error");
    document.getElementById("first_group").classList.remove("has-success");
    document.getElementById("first_error").onclick = function () {
        location.href = "results.html";
    }
  }
  else
  {
    document.getElementById("first_error").innerHTML="Wrong. Click me to continue.";
    document.getElementById("first_group").classList.add("has-error");
    document.getElementById("first_group").classList.remove("has-success");
    document.getElementById("first_error").onclick = function () {
        location.href = "results.html";
    }
  }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

