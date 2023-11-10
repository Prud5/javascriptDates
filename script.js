let req = document.querySelector("#baddie");
req.innerHTML = "Mouse";
let emojis = document.querySelector("#emoji");
emojis.innerHTML = "💇‍♀️💄";
function onClick(event) {
  event.preventDefault();
  event.target.innerHTML = "Thank you queen!😚😍";
}
let button = document.querySelector("button");
button.addEventListener("click", onClick);
