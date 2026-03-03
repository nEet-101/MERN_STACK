// Event Listener

// --------------------input event--------------------
// let inp = document.querySelector("input");
// inp.addEventListener("input", function(dets){
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
// });


// --------------------change event--------------------
let selectedDevice = document.querySelector("select");
let device = document.querySelector("#device");

selectedDevice.addEventListener("change", function (dets) {
    // console.log(dets.target.value);
    // device.textContent = "✅Device Selected"
    device.textContent = `${dets.target.value} Device Selected`
});

