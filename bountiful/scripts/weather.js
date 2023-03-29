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
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;


fetch(forecastURL)
.then((response) => response.json())
.then((forecastObject) => {
console.log(forecastObject);

const threeDay = forecastObject.list.filter((forecast) =>forecast.dt_txt.includes("18:00:00"));
console.log (threeDay);
}
)