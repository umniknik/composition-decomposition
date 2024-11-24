/**
 * Виджет "Погода"
 */

import React from "react";
import TitleWidget from "./TitleWidget";

function Weather({ srcUrl, temp, tempMorning, tempEvening }) {
    return (
        <>
            <TitleWidget title='Погода' />
            <div className="weather_wrp">
                <img src={srcUrl} alt="" />
                <div>{temp}</div>
                <div>
                    <span>Утром {tempMorning},</span>
                    <span>днём {tempEvening}</span>
                </div>

            </div>
        </>

    )
}

export default Weather;