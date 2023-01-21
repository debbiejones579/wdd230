const date = new Date();
const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
//document.querySelector(
      // "#currentdate"
     //).innerHTML = new Date().toLocaleDateString("en-us", options);//

document.querySelector("#currentyear").innerHTML = date.getFullYear();

document.querySelector("#thisupdate").innerHTML = document.lastModified;