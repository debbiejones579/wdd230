const key="150cd72e5595793ee58a48d53d68f9f7";
//const lon="-84.9341";
//const lat="34.3687";
//const key="f9da74cc7d2649956737f45278b83ba7";
const lon="-112.102997";
const lat="41.163891";
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
  image.setAttribute("src", source)
  span.append(image);

  //get current conditions
  const currentConditions = document.querySelector("#conditions");
  currentConditions.innerHTML = jsObject.current.weather[0].description;

  //get current temperature
    const temp = jsObject.current.temp.toFixed(0);
    document.querySelector("#temp").innerHTML = `${temp}&deg F`;

//get windspeed
 const windspeed = jsObject.current.wind_speed.toFixed(0);
  document.querySelector("#windspeed").innerHTML = `${windspeed} mph Winds`;



  //calculation for windchill
  var chill = 0;
  var message = 0;
  if (temp <= 50 && windspeed > 3) {
    chill = 35.74 + .6215 * temp - 35.75 * Math.pow(windspeed, .16) +  .4275 * temp * Math.pow(windspeed, .16);
    message = chill.toFixed() + "°F";
  } else {
    message = "N/A"
  };
  document.querySelector("#windchill").innerHTML = message;
  }
)