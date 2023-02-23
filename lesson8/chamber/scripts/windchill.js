const temp= document.querySelector("#temp").innerText;
const speed= document.querySelector("#windspeed").innerText;

let chill = 0;

let output = 0;

if (temp <=50 && speed >3) {
    chill = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) + .4275 * temp*Math.pow(speed, .16);
    output = chill.toFixed() + "F";
} else {
    output= "N/A";
}
document.querySelector("#windchill").innerHTML = output;