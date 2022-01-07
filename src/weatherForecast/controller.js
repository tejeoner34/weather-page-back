import { returnCurrentWeather, searchWeatherData, getSearchedDataModel, metricChangeModel, currentLocalizationModel } from "./model.js";


export async function getCurrentData(req, res){
    const lat = req.query.lat;
    const lon = req.query.lon;
    const data = await returnCurrentWeather(lat, lon)
    res.json(data)
}

export async function searchData (req, res){
    const city = req.query.q;
    const data = await searchWeatherData(city);
    res.json(data)
}

export async function getSearchedData(req, res){
    const lat = req.query.lat;
    const lon = req.query.lon;
    const metric = req.query.units;
    const data = await getSearchedDataModel(lat, lon, metric);
    res.json(data);
}

export async function metricChangeController(req, res){
    const data = await metricChangeModel(req.query.lat, req.query.lon, req.query.units);
    res.json(data);
}

export async function currentLocalizationController(req, res){
    const data = await currentLocalizationModel(req.query.lat, req.query.lon);
    res.json(data);
}