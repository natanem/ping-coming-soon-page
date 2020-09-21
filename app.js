const input = document.querySelector('input');
const error = document.querySelector('span.error')


input.addEventListener('blur', e =>{
    if(e.target.value === ''){
        error.textContent = "Email address cannot be empty"
    }
    else if(!isValid(e.target.value)){
        error.textContent = 'Invalid email address'
    }else{
        error.textContent = '';             
    }
})

 

function isValid(email){
   const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   return email.match(re) ? true : false;
}