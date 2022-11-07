const formEl = document.querySelector('.login-form');
console.log(formEl);
const inputs = document.querySelectorAll('input');
console.log(inputs);
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    
    inputs.forEach(input => {
        if (input.value === "") {
            alert("Всі поля повині бути заповнені")
            return console.log(false)
        }
        else {
            console.log(true)
        }
    }) 
    
    formEl.reset();
   } 
 



