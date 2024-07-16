var container = document.querySelector(".container");
var search = document.querySelector(".search");
var weather = document.querySelector(".weather");
var details = document.querySelector(".details");
var ville = document.querySelector("#search_input");

var apiKey = "7d98a388ce06656afc560643a0c76b70";
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;



async function getWeather(ville){
    const reponse= await fetch(apiUrl + ville + `&appid=${apiKey}`);
    const donnee= await reponse.json();

    console.log(donnee);

    document.querySelector(".ville").innerHtml = ville.value;    
    document.querySelector(".temp").innerHtml = Math.round(donnee.main.temp)+ "degree C";       
    document.querySelector(".valeurHumidity").innerHtml = donnee.main.humidity +'%';    
    document.querySelector(".valeurVent").innerHtml = donnee.wind.speed + 'km/h';    
}
function show(){
    getWeather(ville.value);
}

search.addEventListener("click", ()=>{
    getWeather(search.value);
})