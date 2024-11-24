/**
 * Виджет "Работа над ошибками"
 */

import React from "react";
import TitleWidget from "./TitleWidget";

function WorkOnBugs({ srcUrl, title, description }) {
    return (
        <div>
            <img src={srcUrl} alt="" />
            <TitleWidget title={title} />
            <div className="WorkOnBugs_wrp">
                <div>{description}</div>
            </div>
        </div>  
    )
}

export default WorkOnBugs;