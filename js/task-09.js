function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const refs = {
  btnEl: document.querySelector('.change-color'),
  spanEl: document.querySelector('.color'),
  bodyEl: document.querySelector('body'),
}
console.log(refs.btnEl);
console.log(refs.spanEl);
console.log(refs.bodyEl);

refs.btnEl.addEventListener('click', onTakeBtn)

function onTakeBtn() {
  refs.spanEl.textContent = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}




