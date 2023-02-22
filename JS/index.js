
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


updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = cityTimeZone;
}


updateTime();
setInterval(updateTime, 1000);




let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updaetCity);