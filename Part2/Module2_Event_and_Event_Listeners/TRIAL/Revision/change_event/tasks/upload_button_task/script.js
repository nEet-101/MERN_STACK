let button = document.querySelector("#btn");
let fileInp = document.querySelector("#file");

button.addEventListener("click", function () {
    fileInp.click();
});

fileInp.addEventListener("change", function (dets) {
    // button.textContent = dets.target.files[0].name;
    const file = dets.target.files[0];
    if(file) {
        btn.textContent = file.name;
    }
});

