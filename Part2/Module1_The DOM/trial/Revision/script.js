// DOM Manipulation 
let h1 = document.querySelector('h1');
h1.textContent = "Do JS Instead!";
h1.innerHTML ="<i>Do JS Instead!</i>";

//Notes: difference between innerHTML-innerText-textContent

//Attribute Manipulation
let google = document.querySelector('#google');
google.setAttribute('href','https://www.google.com/');
let googleButton = document.querySelector('#gotoBut');
googleButton.classList.add('goto');
console.log(google.getAttribute('href'));

let microsoft = document.querySelector('#microsoft');
microsoft.setAttribute('href','https://www.microsoft.com/');
let microsoftButton = document.querySelector('#gotoMicro');
microsoftButton.classList.add('goto');

//Dynamic DOM Creation
let amazon = document.createElement('a');
amazon.setAttribute('href','https://www.amazon.com/');
amazon.setAttribute('target','_blank');
document.body.append(amazon);
let amazonButton = document.createElement('button');
amazonButton.setAttribute('id','gotoAmazon');
amazonButton.textContent = "amazon";
amazon.appendChild(amazonButton);
let amazonStyle = document.querySelector('#gotoAmazon');
amazonStyle.classList.add('goto');





