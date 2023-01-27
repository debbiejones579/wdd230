const date = new Date();
const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
document.querySelector(
       "#currentdate" ).innerHTML = new Date().toLocaleDateString("en-us", options);//

document.querySelector("#currentyear").innerHTML = date.getFullYear();//

document.querySelector("#thisupdate").innerHTML = document.lastModified;

//This gets the ul list from html
const mainnav = document.querySelector('.navigation');

//This gets the specific "hamburger" li
const hambutton = document.querySelector('#menu');
//this waits for a user to click and then adds or removes "responsive" from the class list
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



//function toggleMenu() { }
//document.getElementsByClassHome("navigation")[0].classList.toggle("responsive");