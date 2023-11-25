"use strict";

const menu = document.querySelector('.js_menu');
const plus = document.querySelector('.js_plus');
    
    menu.addEventListener( 'click' , (event) => {
            
        if (plus.classList.contains ('collapsed')) {
        plus.classList.remove ('collapsed')
        }
        else {
        plus.classList.remove ('collapsed')
        }
    
    });


    // const plus = document.querySelector('.js_plus');
    // plus.classList.add('collapsed');
const btn_add = document.querySelector('.js_btn_add');
    btn_add.addEventListener ('click' , (event) => {
        const inputDesc = document.querySelector('.js-input-desc');
        const inputPhoto = document.querySelector('.js-input-photo');
        const inputName = document.querySelector('.js-input-name');
        const inputBreed = document.querySelector('.js-input-breed'); 
        const valueDesc = inputDesc.value;
        const valuePhoto = inputPhoto.value;
        const valueName = inputName.value;
        const valueBreed = inputBreed.value;
        const photo = valuePhoto;
        const desc = valueDesc;
        const name = valueName;
        const breed = valueBreed;
        const card_desc = document.querySelector('.js_card_desc');
        const card_photo = document.querySelector('.js_card_photo');
        const card_name = document.querySelector('.js_card_name');
        const card_breed = document.querySelector('.js_card_breed');
        card_desc.innerHTML = desc;
        card_photo.innerHTML = photo;
        card_name.innerHTML = name;
        card_breed.innerHTML = breed;
    });