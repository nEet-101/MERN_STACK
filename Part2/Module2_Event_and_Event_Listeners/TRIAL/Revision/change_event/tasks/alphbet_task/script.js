let h1 = document.querySelector("#heading");
window.addEventListener("keydown", function(dets) {
    if(dets.key === " ") {
        h1.textContent = "Space";
    } else {
        h1.textContent = dets.key;
    }
});
