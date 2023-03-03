const requestData= "scripts/data.json";


fetch(requestData)
.then(function (response) {
   return response.json();
})
.then(function (jsObject) {
    console.log(jsObject)
    // make a list of all merchants/businesses
    const merchants= jsObject["businesses"];

//now that we have a list, we can display the information FOR EACH business

merchants.forEach(business => {
    //for each business in the list, let's make a business card

    //first create the html items that are needed
    let card = document.createElement('figure');
    let h3 = document.createElement('h3');
    //<p> for the address, img for image, figcaption for business description
    let p = document.createElement("p");

    let img = document.createElement("img");

    //fill the html that we just made   
    h3.textContent = business.name;
    p.innerHTML = `
         ${business.address[0].numbers} ${business.address[0].street} 
    <br> ${business.address[0].city}, ${business.address[0].state}
    <br> ${business.address[0].zipcode} 
    <br> ${business.phone}
    <br> ${business.website}`;
     let imgsrc = `images/merchants/${business.image}`;


    
    
   


    //add the html element we just made to our card

img.setAttribute("src", imgsrc);
img.setAttribute("alt", business.name);
    card.append(h3);
card.append(p);
card.append(img);



    document.querySelector(".bizcardgrid").append(card);

})


})