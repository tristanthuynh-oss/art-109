

let catImage00 = document.querySelector("#image-0");
let catImage01 = document.querySelector("#image-1");
let catImage02 = document.querySelector("#image-2");
let catImage03 = document.querySelector("#image-3");
let catImage04 = document.querySelector("#image-4");
let catImage05 = document.querySelector("#image-5");


// This is a click event that will hide the cat images clicked.
catImage00.addEventListener("click", function() {
   alert("RELEASE ME.");
   console.log("Cat image-00 clicked");
   catImage01.style.visibility = "visible";
});

catImage01.addEventListener("click", function() {
   console.log("Cat image-01 clicked");
   catImage02.style.visibility = "visible";
});

catImage02.addEventListener("click", function() {
   console.log("Cat image-02 clicked");
   catImage03.style.visibility = "visible";
});

catImage03.addEventListener("click", function() {
   console.log("Cat image-03 clicked");
   catImage04.style.visibility = "visible";
});

catImage04.addEventListener("click", function() {
   console.log("Cat image-04 clicked");
   catImage05.style.visibility = "visible";
});

catImage05.addEventListener("click", function() {
   console.log("Cat image-05 clicked");
   catImage05.style.visibility = "visible";
});

