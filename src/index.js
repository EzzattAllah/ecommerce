window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert('أُضيف المنتج إلى عربة الشراء')
    })
})

console.log("أهلًا بك في متجر عربي");

console.log("أهلًا بكم في أكاديمية حسوب");

// document.getElementsByClassName('btn add-to-cart-btn'); 
// function () {
//     alert('أُضيف المنتج للعربة')
// }
