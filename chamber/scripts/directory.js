const requestData = "scripts/data.json";


fetch(requestData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
     
        const merchants = jsObject["businesses"];

      

        merchants.forEach(business => {
          
            let card = document.createElement('figure');
            let h3 = document.createElement('h3');
          
            let p = document.createElement("p");

            let img = document.createElement("img");

            //fill the html that we just made   
            h3.textContent = business.name;
            p.innerHTML = `
         ${business.address[0].numbers} ${business.address[0].street} 
    <br> ${business.address[0].city}, ${business.address[0].state},
         ${business.address[0].zipcode} 
    <br> ${business.phone}
    <br> ${business.website}`;
            let imgsrc = `images/merchants/${business.image}`;



            //add the html element we just made to our card

            img.setAttribute("src", imgsrc);
            img.setAttribute("alt", business.name);
            card.append(img);
            card.append(h3);
            card.append(p);
            document.querySelector(".bizcardgrid").append(card);

        })
    })

//button to tell page to add the special LIST style
function listview() {
    const viewChange = document.querySelector("#bizcardgrid");
    viewChange.classList.add("listDisplay");
}

//button to remove LIST style and add grid style
function cardview() {
    const viewChange = document.querySelector("#bizcardgrid");
    viewChange.classList.remove("listDisplay");
}