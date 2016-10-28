function calculateScore(){
  var score = 3;
  validateFirst();
  var local = location.href;
  document.getElementById("exeter").innerHTML= "Your results are: " + score;
  /*if(local!="results.html")
  {
    document.getElementById("exeter").innerHTML= "Your results are: " + score;
  }*/
}

function validateFirst() 
{ 
  var valueOne = document.getElementById("first_value").value;
  var score = 0;
  if(valueOne == "1101A")
  {
    document.getElementById("first_group").classList.add("has-success");
    document.getElementById("first_group").classList.remove("has-error");
    document.getElementById("first_error").innerHTML="Correct! Click me to continue!";
    document.getElementById("first_error").onclick = function () {
        location.href = "q2.html"; 
    }
    score++;
    return score;
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
  if(valueOne == "BCCCDDEDDCCCB")
  {
    document.getElementById("first_group").classList.add("has-success");
    document.getElementById("first_group").classList.remove("has-error");
    document.getElementById("first_error").innerHTML="Correct! Click me to continue!";
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
  if(valueOne == "BCCCDDEDDCCCB")
  {
    document.getElementById("first_group").classList.add("has-success");
    document.getElementById("first_group").classList.remove("has-error");
    document.getElementById("first_error").innerHTML="Correct! Click me to continue!";
    document.getElementById("first_error").onclick = function () {
        location.href = "results.html";
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



