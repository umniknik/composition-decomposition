/**
 * Виджет "Эфир"
 */
import React from "react";
import TitleWidget from "./TitleWidget";
import srcUrl from '../../images/efir.jpg'

function Efir({ efir }) {
    return (
        <>
            <TitleWidget title='Эфир' />
            <div className="Efir_wrp">
                {efir.map((unit) => (
                    <div>
                        <a href={unit.link}>
                            <img src={srcUrl} alt="" />
                            <span>{unit.name} - </span>
                            <span>{unit.programm}</span>
                        </a>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Efir;