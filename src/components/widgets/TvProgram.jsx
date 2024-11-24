/**
 * Виджет "Телепрограмма"
 */

import React from "react";
import TitleWidget from "./TitleWidget";

function TvProgram({ tvprogram }) {
    return (
        <>
            <TitleWidget title='Телепрограмма' />
            <div className="TvProgram_wrp">
                {tvprogram.map((unit) => (
                    <div>
                        <a href={unit.link}>
                            <span>{unit.time} - </span>
                            <span>{unit.kategor} - </span>
                            <span>{unit.item}</span>
                        </a>
                    </div>
                ))}

            </div>
        </>
    )
}

export default TvProgram;