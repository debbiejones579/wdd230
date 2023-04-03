//populate input options with fruit from JSON

const requestFruit = "scripts/fruitdata.json";
let fruitList = '';

fetch(requestFruit)
.then(function (response) {
    return response.json();
})
.then(function (jsObject) {
     fruitList = jsObject['fruits'];
    console.log(fruitList);


    let select1 = document.querySelector("#fruit1-select");
    fruitList.map(fruit => 
        select1.appendChild( new Option(fruit.name, fruit.id)).cloneNode(true)
        );

    let select2 = document.querySelector("#fruit2-select");
        fruitList.map(fruit => 
            select2.appendChild( new Option(fruit.name, fruit.id)).cloneNode(true)
            );

    let select3 = document.querySelector("#fruit3-select");
    fruitList.map(fruit => 
        select3.appendChild( new Option(fruit.name, fruit.id)).cloneNode(true)
        );


})





const firstDrink = localStorage.getItem("drinkCount");

function logDrink(e) {
    //Check if local storage has no value for Drink COunt, if it doesn't, set value of Drink Count to 0
    if(localStorage.getItem('drinkCount') === null) {
        localStorage.setItem("drinkCount", 0);
    }
    // if Drink COunt has a value, get the value and add 1, then update local storage
    let pastCount = localStorage.getItem('drinkCount');
    let newCount = parseInt(pastCount) + 1;
    localStorage.setItem('drinkCount', newCount);

    //display order details on page
    displayOrder();

    //prevent form from being submitted
    e.preventDefault();

}

//listen for drink submit button
const button = document.querySelector('.orderDrink');
button.addEventListener('click', logDrink, false);






// Display Order Details on screen to user

function displayOrder() {

    const display =document.querySelector('.orderInfo');
    const name = document.querySelector("#firstname").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const special = document.querySelector("#description").value;
    

    const fruit1 = document.querySelector('.fruit1').value;
    const fruit1data = fruitList.filter(fruit => fruit.id == fruit1)[0];
    const fruit2 = document.querySelector('.fruit2').value;
    const fruit2data = fruitList.filter(fruit => fruit.id == fruit2)[0];
    const fruit3 = document.querySelector('.fruit3').value;
    const fruit3data = fruitList.filter(fruit => fruit.id == fruit3)[0];
 

    const calories = parseInt(fruit1data.nutritions.calories) + 
    parseInt(fruit2data.nutritions.calories) + 
    parseInt(fruit3data.nutritions.calories);
    const fat = parseInt(fruit1data.nutritions.fat) + 
    parseInt(fruit2data.nutritions.fat) + 
    parseInt(fruit3data.nutritions.fat);
    const protein = parseInt(fruit1data.nutritions.protein) + 
    parseInt(fruit2data.nutritions.protein) + 
    parseInt(fruit3data.nutritions.protein);
    const carbohydrates = parseInt(fruit1data.nutritions.carbohydrates) + 
    parseInt(fruit2data.nutritions.carbohydrates) + 
    parseInt(fruit3data.nutritions.carbohydrates);
    const sugar = parseInt(fruit1data.nutritions.sugar) + 
    parseInt(fruit2data.nutritions.sugar) + 
    parseInt(fruit3data.nutritions.sugar);


    display.innerHTML = `
    <h3>Your Order Details</h3>
    <ul> Customer info
    <li> Name: ${name}</li>
    <li> Email: ${email}</li>
    <li> Phone#: ${phone}</li>
    </ul>

    <ul>Fruit Choices
    <li>${fruit1data.name} </li>
    <li>${fruit2data.name} </li>
    <li>${fruit3data.name} </li>
    </ul>
    <h4>Special Instructions: </h4>
    <p>${special}</p>
    <h4>Nutritional Facts: </h4>
    <ul>
    <li> Calories: ${calories} </li>
    <li> Fat: ${fat} </li>
    <li> Protein: ${protein} </li>
    <li> Carbohydrates: ${carbohydrates} </li>
    <li> Sugar: ${sugar} </li>
    `;


}