/**
 * Виджет карта Германии
 */

import React from "react";
import TitleWidget from "./TitleWidget";

function MapGerman({ children }) {
    return (
        <>
            <TitleWidget title='Карта Германии' />
            <div className="MapGerman_wrp">            
            <span>{children}</span>
            </div>
        </>
    )
}

export default MapGerman;