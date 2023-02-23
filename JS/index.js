
function updateTime(){

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss[<small>]A[</small>]");



let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss[<small>]A[</small>]");
}


function updateCity(event) {
    let cityTimeZone = event.target.value;
    cityTimeZone = cityTimeZone.replace("_", " ").split("/")[1];
    cityTimeZone = cityTimeZone.replace("/", " ");
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =`
   
    <div class="city">
        <div>
        <h2>${cityTimeZone}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
             <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div> 
        </div>
    `;

}


updateTime();
setInterval(updateTime, 1000);




let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);