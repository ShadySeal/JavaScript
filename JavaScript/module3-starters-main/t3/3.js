'use strict';
const names = ['John', 'Paul', 'Jones'];
const element = document.getElementById("target");
let list = '';
for (let i = 0; i < names.length; i++) {
    list += `<li>${names[i]}</li>`;
}
element.innerHTML = list;