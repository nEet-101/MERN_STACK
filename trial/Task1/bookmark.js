let input = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector("#bookmarks-container");

// console.dir(input);

// btn.addEventListener("click", function(){
//     let userText = input.value.trim();
//     if (userText !== '') {
//         let bookmark = document.createElement("div");
//         bookmark.textContent = userText;
//         container.appendChild(bookmark);
//         input.value = '';
//     }
// });

btn.addEventListener("click", function(){
    let userText = input.value.trim();
    if(userText !== ''){
        let bookmark = document.createElement("div");
        let textSpan = document.createElement("span");
        textSpan.textContent = userText;
        
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function(){
            bookmark.remove();
        });

        bookmark.classList.add('bookmark');
        bookmark.appendChild(textSpan);
        bookmark.appendChild(deleteBtn);
        container.appendChild(bookmark);
        input.value = '';
        input.focus();

    }
});
