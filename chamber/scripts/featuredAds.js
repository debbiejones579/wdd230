const requestData = "scripts/data.json";


fetch(requestData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
     
        const merchants = jsObject["businesses"];

        //filter for only gold & silver businesses
        const featured = merchants.filter(merchants => merchants.membership == "gold" 
        || merchants.membership == "silver");

       
        const listLength = featured.length;

       
       const threeAdList = []; //empty list

       for(let i = 0; i<3; i++) { 
            const randomNumber = Math.floor(Math.random() * (listLength + 1));
            
           
            const randomBiz = featured[randomNumber];
            threeAdList.push(randomBiz);
       };
       console.log(threeAdList);


       
        threeAdList.forEach(business => {
           
            //first create the html items that are needed
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
            document.querySelector(".ad-container").append(card);

        })
    })

