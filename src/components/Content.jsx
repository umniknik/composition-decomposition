/**
 * Компанент, который отражает виджеты центральной части 
 * 1. Меню над строкой поиска
 * 2. Стррока поиска
 * 3. Баннер
 */

import React from "react";
import Menu from './widgets/Menu';
import Search from './widgets/Search';
import Banner from './widgets/Banner';
import banner from '../images/banner.jpg'

function Content() {
    return (
        <div className="content">
            <Menu mainMenu={mainMenu} />
            <Search><b>Найдется всё. Например,</b> фаза луны сегодня </Search >
            <Banner url='#'>{banner}</Banner>
        </div>
    )
}

export default Content;

const mainMenu = [
    {
      name: 'Видео',
      link: '#'
    },
    {
      name: 'Картинки',
      link: '#'
    },
    {
      name: 'Новости',
      link: '#'
    },
    {
      name: 'Карты',
      link: '#'
    },
    {
      name: 'Маркет',
      link: '#'
    },
    {
      name: 'Переводчик',
      link: '#'
    },
    {
      name: 'Эфир',
      link: '#'
    },
    {
      name: 'ещё',
      link: '#'
    }
  ]