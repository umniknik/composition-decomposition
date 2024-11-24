/**
 * Виджет меню над строкой поиска
 */
import React from "react";

function Menu({ mainMenu }) {
    return (
        <div className="mainMenu">
            {mainMenu.map((item, index) => (
                <div key={index}>
                    <a href = {item.link} >{item.name}</a>
                </div>
            ))}
        </div>
    )
}

export default Menu;