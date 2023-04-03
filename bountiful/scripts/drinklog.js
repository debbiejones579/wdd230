let span = document.querySelector("#drinkCounter");

let count = localStorage.getItem('drinkCount');

span.append(count);