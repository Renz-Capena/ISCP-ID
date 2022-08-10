'use strict'

//user info 
const image = document.querySelector('#image');
const personName = document.querySelector('#name');
const student_id = document.querySelector('#student_id');
const parents_name = document.querySelector('#parents_name');
const parents_number = document.querySelector('#parents_number');
const signature = document.querySelector('#signature');
const bs = document.querySelector('#bs');

const btn = document.querySelector('.createIdBtn');

//user front card
const user_picture = document.querySelector('.user_picture');
const user_name = document.querySelector('#user_name');
const user_id = document.querySelector('#user_id');
const user_signature = document.querySelector('#user_signature');
const user_bs = document.querySelector('#user_bs');

//user back card
const user_parents = document.querySelector('#user_parents');
const user_parents_number = document.querySelector('#user_parents_number');

btn.addEventListener('click',function(){
    if(image.value && personName.value && student_id.value &&  parents_name.value && parents_number.value && signature.value && bs.value){
        user_picture.src = image.value;
        user_name.textContent = personName.value;
        user_id.textContent = student_id.value;
        user_signature.textContent = signature.value;
        user_bs.textContent = bs.value;
        user_parents.textContent = parents_name.value;
        user_parents_number.textContent = parents_number.value;
    }else{
        alert('Some field is empty!')
    }

})