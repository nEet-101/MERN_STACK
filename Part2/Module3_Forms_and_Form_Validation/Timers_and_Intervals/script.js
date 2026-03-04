// let assume we have to complete download in 5 sec -> 5sec = 5000 = 100% => 1% = 50ms
let count = 0;
let progressText = document.querySelector("#progressText");
let progressBar = document.querySelector("#progressBar");
let heading = document.querySelector("h2");

let start = document.querySelector("#downloadBtn");
start.addEventListener("click", function(){
    let interval = setInterval(function () {
        if (count < 100) {
            count++;
            progressBar.style.width = `${count}%`;
            progressText.textContent = `${count}%`;
        }else {
            clearInterval(interval);
            heading.textContent = "Download Complete"
        }
    }, 50
    );
});

