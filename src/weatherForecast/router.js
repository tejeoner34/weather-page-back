import express from "express";
import res from "express/lib/response";
import { getCurrentData, getSearchedData, searchData, metricChangeController, currentLocalizationController } from "./controller.js";

const router = express.Router();


router.route('/hello')
    .get((req,res)=>{
        res.send('ok')
    })

router.route('/current-data')
    .get(getCurrentData)

router.route('/search-data')
    .get(searchData)

router.route('/get-searched-data')
    .get(getSearchedData)

router.route('/metric-change')
    .get(metricChangeController)

router.route('/current-localization')
    .get(currentLocalizationController)


export default router;