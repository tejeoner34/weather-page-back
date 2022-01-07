import express from "express";
import cors from 'cors';
import WeatherRouter from './src/weatherForecast/router.js'
import dotenv from 'dotenv'
dotenv.config()




const app = express();
app.use(express.json());
app.use(cors());


app.use('/weather', WeatherRouter);



const PORT = process.env.PORT || 4567;

app.listen(PORT, ()=>{
    console.log('server Up', PORT)
})