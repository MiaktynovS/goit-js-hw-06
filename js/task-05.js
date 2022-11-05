const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onChangeInput)

function onChangeInput(event) {
    refs.outputEl.textContent = event.currentTarget.value;
}
