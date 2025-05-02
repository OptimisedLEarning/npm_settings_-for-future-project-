// index.js
import { greeting } from "./greeting.js";

console.log(greeting);

//import styles
import "./styles.css";

// Create a dropdown menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//adding images   with webpack

//import read from "./origin.PNG";

//const image = document.createElement("img");
//image.src = read;

// document.body.appendChild(image);
