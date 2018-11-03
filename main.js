document.getElementById('button').addEventListener("click", triggerEvent);


function triggerEvent (){
  document.getElementById("test").innerHTML = alert("this is a test");
  document.getElementById("test").innerHTML = "Hello, this is a test"
  document.getElementById("button").style.display = "none";
};
