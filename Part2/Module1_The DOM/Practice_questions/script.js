// -> Ques: select all elements of list and print their text using loop.
let list = document.querySelectorAll('li'); // select all elements of list

// Type-1 using for() loop.
// console.dir(list);
// for(let i=0; i<list.length; i++){
//     console.log(list[i].textContent);
// }

//  Type-2 using forEach loop
// list.forEach(function (val){
//     console.log(val.textContent);
// });


// -> Ques: How to get src of the image ?
// let img = document.querySelector("img");
// console.log(img.getAttribute('src'));
// img.setAttribute('src','https://images.unsplash.com/photo-1692133208294-7e181628ef21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170');
// console.log(img.getAttribute('src'));

// -> Ques: Add a highlight class to the every even item in the list.
let evenItem = document.querySelectorAll("ul li:nth-child(2n)");

evenItem.forEach(function (val) {
    val.classList.add('highlight');
});


