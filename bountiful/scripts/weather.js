const key="150cd72e5595793ee58a48d53d68f9f7";

const lon="-117.34352";
const lat="33.15846";
const unit="imperial";
const apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${key}&units=${unit}`;


fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);


  //get icon
  const span = document.querySelector("#weathericon");
  let image = document.createElement("img");
  let icon = jsObject.current.weather[0].icon;
  let source = ` https://openweathermap.org/img/wn/${icon}@2x.png`;
  let altText = jsObject.current.weather[0].description;
  image.setAttribute("src", source);
  image.setAttribute("alt",altText);
  span.append(image);

  //get current conditions
  const currentConditions = document.querySelector("#conditions");
  currentConditions.innerHTML = jsObject.current.weather[0].description;

  //get current temperature
    const temp = jsObject.current.temp.toFixed(0);
    document.querySelector("#temp").innerHTML = `${temp}&deg F`;

  //get current humidity
  const currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = jsObject.current.humidity;
  }
)


// 3 day forecast
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${key}&units=imperial`;


fetch(forecastURL)
.then((response) => response.json())
.then((forecastObject) => {
console.log(forecastObject);


//filter list for a daily time stamp
const filterList = forecastObject.list.filter((forecast) =>forecast.dt_txt.includes("18:00:00"));
console.log (filterList);

// make a list of the next 3 days forecast
const threedayList = [filterList[0], filterList[1], filterList[2]];
console.log(threedayList);

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];




//use daily forecast to populate html for user
//build some html elements
threedayList.forEach((day) => {
  //make a headline of the day of week
  //get the temp

   // get day of week relative to Today
   let d = new Date(day.dt*1000);
   let dayOfWeek = weekdays[d.getDay()];
 
   //get temp for specific day
   let temp = day.main.temp;
 
   // get icon
   let iconCode = day.weather[0].icon;
   let imgAlt = day.weather[0].description;


//** Build ForeCast Card */
  //create figure Element
let figure = document.createElement('figure');

//create h3 element
let h3 = document.createElement('h3');
h3.textContent = dayOfWeek;

//create image
let img = document.createElement('img');
let imgSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
img.setAttribute('src', imgSrc);
img.setAttribute('alt', imgAlt);

//create figcaption description
let figcaption = document.createElement('figcaption');
figcaption.innerHTML = `${temp}F`
  
figure.append(h3);
figure.append(img);
figure.append(figcaption);

document.querySelector(".three-day").append(figure);

})



}
)