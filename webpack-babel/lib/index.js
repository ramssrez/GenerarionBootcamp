"use strict";

require("fslightbox");

fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};
/* import { suma, saludo } from './operaciones';
import Swal from 'sweetalert2'
document.write(`<h2>La suma es: ${suma(1,3)}</h2>`)
console.log(suma(1,2));
console.log(saludo);
document.write(`<h2>La suma es: ${suma(1,10)}</h2>`);

let timerInterval
Swal.fire({
  title: 'Raúl Ramírez Pérez',
  html: 'I will close in <b></b> milliseconds.',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
}) */

/* import _ from 'lodash';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */