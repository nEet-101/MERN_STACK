let btn = document.querySelector('#btn');
let fileinpt = document.querySelector('#fileinpt');


btn.addEventListener('click', function(dets){    
    fileinpt.click();
});

fileinpt.addEventListener('change', function(dets){
    // console.log(dets.target.files[0].name);
    const file = dets.target.files[0].name;
    if(file){
        btn.textContent = file;
    }
    // btn.textContent = dets.target.files[0].name;
});
