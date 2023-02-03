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


//display pancake banner if day is Mon or Tues

if (new Date().getDay() == 1){
       document.querySelector(".pancakeBanner").style.display = "block";
} else if (new Date().getDay() == 2){
       document.querySelector(".pancakeBanner").style.display = "block";
} else {
       document.querySelector(".pancakeBanner").style.display = "none";      
}



