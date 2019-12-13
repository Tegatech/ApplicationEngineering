//function to count characrters
function charcount(text) {
  let textcount = document.getElementById("textbox").textContent;
  let charcount = textcount.length;
  console.log(charcount);

  document.getElementById("current").innerHTML = charcount + " Charcaters";
}
