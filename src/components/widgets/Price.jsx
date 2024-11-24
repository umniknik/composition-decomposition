/**
 * Виджет "Курсы валют" под виджетом новостей вверху страницы
 */
import React from "react";

function Price({ prices }) {
    return (
        <div className="prices">
            {prices.map((val, index) => (
                <div key={index}>
                    <span className="pricename">{val.name}</span>
                    <span className="pricevalue">{val.price}</span>
                    <span className="priceexc">{val.exc}</span>
                </div>
            ))}

        </div>
    )
}

export default Price;