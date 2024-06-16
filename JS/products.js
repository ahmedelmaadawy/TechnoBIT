document.getElementById("username").innerHTML = document.cookie
  .split(";")[2]
  .split("=")[1];
console.log(document.cookie);
