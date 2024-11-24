/**
 * Компанент, который отражает виджеты расположенные вверхней части экрана, над меню над строкой поиска
 */

import React from "react";
import HeaderMenu from './widgets/HeaderMenu';
import Header from './widgets/Header';
import earthPlanetImg from '../images/earthplanet.png';
import Price from './widgets/Price';
import WorkOnBugs from "./widgets/WorkOnBugs";
import workOnBugsimg from '../images/workOnBugs.jpg'

function TopContent() {
    return (
        <div className="topContent">
            <div>
                <HeaderMenu menuLinks={MenuLinks} mainpage = '0'>31 июля, среда 02:32</HeaderMenu>
                <Header news={news} />
                <Price prices={prices} />
            </div>
            <WorkOnBugs srcUrl={workOnBugsimg} title='Работа над ошибками' description='Смотрите на Яндексе и запоминайте' />            
        </div>
    )
}

export default TopContent;

const MenuLinks = [
    {
        ankor: 'Сейчас в СМИ',
        link: '#'
    },
    {
        ankor: 'в Германии',
        link: '#'
    },
    {
        ankor: 'Рекомендуем',
        link: '#'
    }
]

const news = [
    {
        text: 'Перзидент упростил получение авто номеров',
        link: '#',
        srcImg: earthPlanetImg
    },
    {
        text: 'В команде раскрыли план реформ',
        link: '#',
        srcImg: earthPlanetImg
    },
    {
        text: 'Автор прокоментировал жизнь и удачу десятков людей',
        link: '#',
        srcImg: earthPlanetImg
    },
    {
        text: 'В команде раскрыли план реформ',
        link: '#',
        srcImg: earthPlanetImg
    },
    {
        text: 'Перзидент упростил получение авто номеров',
        link: '#',
        srcImg: earthPlanetImg
    }
]

const prices = [
    {
        name: 'USD MOEX',
        price: '63.52',
        exc: '+0.09'
    },
    {
        name: 'USD MOEX',
        price: '63.52',
        exc: '+0.09'
    },
    {
        name: 'USD MOEX',
        price: '63.52',
        exc: '+0.09'
    }
]