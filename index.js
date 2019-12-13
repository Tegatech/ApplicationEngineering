
// Functions that Append Header and Text
function header1() {
  let root = document.createElement("h1");
  let text = document.createTextNode("HEADER 1");
  root.appendChild(text);
  document.getElementById("textbox").appendChild(root);
}

function header2() {
  let root = document.createElement("h2");
  let text = document.createTextNode("HEADER 2");
  root.appendChild(text);
  document.getElementById("textbox").appendChild(root);
}

function text() {
  let root = document.createElement("p");
  let text = document.createTextNode("Enter Text");
  root.appendChild(text);
  document.getElementById("textbox").appendChild(root);
}

document.getElementById("title").innerHTML = localStorage["title"] || "Enter Title";
document.getElementById("textbox").innerHTML = localStorage["text"] || "Enter Title";
//Function that saves what it is in textbox div to localStorage
//saves every 5 seconds
setInterval(function() {
  localStorage["title"] = document.getElementById("title").innerHTML; // title div
  localStorage["text"] = document.getElementById("textbox").innerHTML; // textbox div
  console.log(localStorage);
}, 5000);


//Darkmode function
function darktolight() {
  let darkmode = document.body;
  darkmode.classList.toggle("dark");

  // let textboxdark = document.getElementById("textbox");
  // document.getElementById("textbox").style.background = "#454444";
  // document.getElementById("textbox").style.border = "1px solid #15610a";
  //textboxdark.classList.toggle("darktextbox");

}
