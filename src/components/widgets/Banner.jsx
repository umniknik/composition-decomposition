/**
 * Большой баннер под строкой поиска
 */
import React from "react";

function Banner({url, children} ){
    return (
        <div>
            <a href={url}><img src = {children} /></a>
        </div>

    )
}

export default Banner;

