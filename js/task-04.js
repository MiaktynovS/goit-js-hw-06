
const counterValueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
let valueEl = Number(document.querySelector('#value').textContent);

decrementBtnEl.addEventListener('click', () => {
  valueEl -= 1;
  counterValueEl.innerHTML = valueEl;
})

incrementBtnEl.addEventListener('click', () => {
  valueEl += 1;
  counterValueEl.innerHTML = valueEl;
})






// const counter = {
//   value: 0,
//   increment (){
//   counter.value += 1;
// },
// decrement (){
//   counter.value -= 1;
// },
// };

// const counterValueEl = document.querySelector('#value');
// const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
// const incrementBtnEl = document.querySelector('button[data-action="increment"]');
// console.log(counterValueEl);
// console.log(incrementBtnEl);
// console.log(decrementBtnEl);


// incrementBtnEl.addEventListener('click', () => {
//   counter.increment();
//   counterValueEl.textContent = counter.value;
  
//   })

// decrementBtnEl.addEventListener('click', () => {
//   counter.decrement();
//   counterValueEl.textContent = counter.value;
// })




