//-----------------Concept: DOM Manipulation------------------------
// let h1 = document.querySelector('h1');
// h1.innerText = "Hello, sab kuchh theek hai?";
// h1.innerHTML = "<i>Hello, doston!</i>"; // So innerHTML can parse HTML tags
// h1.textContent = "Hello, sab kuchh badhiya hai?";



//------------------Concept: Attribute Manipulation-------------------
// let a = document.querySelector('a');
// a.setAttribute('href','https://www.google.com');
// console.log(a.getAttribute('href'));
// a.removeAttribute('href');



// -----------------Concept: Dynamic DOM Manipulation------------------
// let h1 = document.createElement('h1');
// h1.textContent = "Hello from dynamic h1!";
// console.log(h1);
//append inserts at the end of the body
// document.body.append(h1);

// prepend inserts at the beginning of the body
// document.querySelector('body').prepend(h1);
// document.body.prepend(h1);

//this removes the first h1 (element) from the body --> demonstation of remove attribute
// let h1 = document.querySelector('h1');
// h1.remove();

// let h1 = document.createElement('h1');
// h1.innerText = 'kaisanvaa..5';
// document.querySelector('div').appendChild(h1);
// document.querySelector('div').prepend(h1);



// -----------------Concept: Styling------------------
// let h1 = document.querySelector('h1');
// h1.style.color = 'red';
// h1.style.fontFamily = 'Arial';

// Using classList to add, remove or toggle classes ---> recommended way
let h1 = document.querySelector('h1');
console.dir(h1);
h1.classList.add('port');
// to remove the class 
h1.classList.remove('port');
// to toggle the class  --> if class lagi hogi to hata dega, or agar nahi lagi hogi to laga dega
h1.classList.toggle('port');










