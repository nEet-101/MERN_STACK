let box = document.querySelector(".box");
// box.addEventListener("mouseover", function(){
//     box.style.backgroundColor = "red";
// });

// box.addEventListener("mouseout", function () {
//     box.style.backgroundColor = "bisque";
// });

window.addEventListener("mousemove", function(dets){
    // console.log(dets.clientX, dets.clientY);
    
    //move the box with the mouse -> for that we have to change the position of box(styling)
    box.style.left = dets.clientX + "px";
    box.style.top = dets.clientY + "px";
});