/**
 * Виджет "Посещаемое"
 */

import React from "react";
import TitleWidget from "./TitleWidget";

function Popular({ popular }) {
    return (
        <>
            <TitleWidget title='Посещаемое' />
            <div className="popular_wrp">
                {popular.map((unit) => (
                    <div>
                        <a href= {unit.link}>
                            <span>{unit.kategor} - </span>
                            <span>{unit.item}</span>
                        </a>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Popular;