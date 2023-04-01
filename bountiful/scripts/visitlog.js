const logVisit=  new Date();
const firstVisit= new Date(localStorage.getItem("visitDateLog"));
localStorage.setItem("visitDateLog", logVisit);
const visitLength= logVisit - firstVisit;
const daySince= visitLength/1000/60/60/24;
let visitMessage = 0;
if (daySince <= 1){
visitMessage = 0;
} else {
    visitMessage = daySince.toFixed(0);
}
console.log(visitMessage);
document.querySelector(".visitLog").innerHTML = visitMessage;

