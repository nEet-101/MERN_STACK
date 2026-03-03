// here we are applying event listener on the window [window = whole screen]

let h1 = document.querySelector('h1');
window.addEventListener('keydown', function(dets){
    //this will print the key which has been typed
    // console.log(dets.key); 

    //this will change textContent of h1 on the screen -> what key has been type
    // h1.textContent = dets.key; 

    if(dets.key === " ") {
        h1.textContent = "SPC";
    }
    else {
        h1.textContent = dets.key;
    }
});