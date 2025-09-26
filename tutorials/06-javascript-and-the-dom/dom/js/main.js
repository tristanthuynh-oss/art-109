
console.log("Yo");

let pageTitle = document.querySelector("#page-title")


// This will change the title of the page to pink after 3 seconds.
setTimeout(function(){
pageTitle.style.color = "pink";
console.log("color changed");
} , 3000)

// Click Events on Header to Change Color
document.querySelector("header").onclick = function() {
   console.log("header clicked");
   document.querySelector("header").style.backgroundColor = "LightBlue";
};