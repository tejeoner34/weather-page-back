
import fetch from 'node-fetch';


export async function returnCurrentWeather(lat, lon){
    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.API_KEY}`);
    const d = await r.json()
    return d
}

export async function searchWeatherData(city){
    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
    const d = await r.json();
    return d
}

export async function getSearchedDataModel(lat, lon, metric){
    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=${metric}&appid=${process.env.API_KEY}`);
    const d = await r.json();
    return d
}

export async function metricChangeModel(lat, lon, units){
    const r= await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=${units}&appid=${process.env.API_KEY}`);
    const d = await r.json();
    return d
}

export async function currentLocalizationModel(lat, lon){
    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.API_KEY}`);
    const d = await r.json();
    return d
}