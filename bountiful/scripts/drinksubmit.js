//populate input options with fruit from JSON

const requestFruit = "scripts/fruitdata.json";

fetch(requestFruit)
.then(function (response) {
    return response.json();
})
.then(function (jsObject) {
    const fruitList = jsObject['fruits'];
    console.log(fruitList);

    const fruitOptions = [];

    let select1 = document.querySelector("#optionList");

    

    fruitList.forEach(fruit => {
        let name = fruit.name;
        fruitOptions.push(name);
        let message = `<option value="${name}">${name}</option>`;
        select1.append(message);
    })

   
})







//when drink order button is submitted, 
//get drinkLog count from local storage
//add 1 to drinkLog count
//update home page 

const firstDrink = localStorage.getItem("drinkCount");
localStorage.setItem("drinkCount", 0);



function logDrink() {
    console.log("this works");
}








//listen for input drink submit
//const button = querySelector("#orderDrink").value;
//button.addEventListener("click", logDrink, false);