/**
 * Виджет который выводит список новостей вверху страницы
 */
import React from "react";

function Header({ news }) {
    return (
        <div className="нeader-news">
            {news.map((oneNews, index) => (
                <div key={index}>
                    <img src = {oneNews.srcImg} alt = '...' /><a href={oneNews.link}>{oneNews.text}</a>
                </div>
            )
            )}
        </div>
    )
}

export default Header;