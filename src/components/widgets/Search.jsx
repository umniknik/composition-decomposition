/**
 * Виджет строки поиска
 */

import React, { Children } from "react";
import logo from '../../images/ya.jpg'

function Search({children}) {
    return (
        <div className="search">
            <form>
                <img src={logo} />
                <input name = 'search' type="text" />
                <button>Найти</button>
            </form>
            <span>{children}</span>
            


        </div>
    )
}

export default Search;