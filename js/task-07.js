const fontsizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
console.log(fontsizeEl);
console.log(textEl);
fontsizeEl.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}