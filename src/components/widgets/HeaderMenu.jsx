/**
 * Виджет Который выводит табы категорий над списком новостей вверху страницы
 */
import React, { Children } from "react";

const ifMainPage = (index, mainpage ) => {return index === +mainpage ? 'active' : ''};

function HeaderMenu({ menuLinks, mainpage, children }) {
    return (
        <div className="headermenu">
            {menuLinks.map((link, index) => (
                <div key={index} className = {ifMainPage(index, mainpage)}>
                    <a href={link.link}>{link.ankor}</a>
                </div>
            ))
            }
           <span>{children}</span> 
        </div>
    )
}

export default HeaderMenu;