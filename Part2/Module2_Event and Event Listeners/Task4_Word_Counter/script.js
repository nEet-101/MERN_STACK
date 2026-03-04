let inp = document.querySelector("input")
let span = document.querySelector("span");

inp.addEventListener("input", function(){
    let text = 20 - inp.value.length;
    span.textContent = text; 
    //make span tag red for negative values
    if(text < 0) {
        span.style.color = "red";
    } else {
        span.style.color = "white";
    }
})

