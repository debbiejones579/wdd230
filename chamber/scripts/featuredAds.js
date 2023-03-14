const requestData = "scripts/data.json";


fetch(requestData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        //console.log(jsObject)

        // make a list of all merchants/businesses
        const merchants = jsObject["businesses"];

        //filter for only gold & silver businesses
        const featured = merchants.filter(merchants => merchants.membership == "gold" 
        || merchants.membership == "silver");

        // get length of list, so we don't a number that is bigger than our small list of businesses
        const listLength = featured.length;

       // make a list of 3 random businesses to feature on home page ad spots
       const threeAdList = []; //empty list

       for(let i = 0; i<3; i++) { //start at zero and count up to 3, to fill each ad spot
             //get a random number
            const randomNumber = Math.floor(Math.random() * (listLength + 1));
            
            //then use that random number to get the merchant from that spot on the list
            const randomBiz = featured[randomNumber];
            threeAdList.push(randomBiz);
       };
       console.log(threeAdList);


        // now that we have a list, we can display the information FOR EACH business
        threeAdList.forEach(business => {
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
            document.querySelector(".ad-container").append(card);

        })
    })

