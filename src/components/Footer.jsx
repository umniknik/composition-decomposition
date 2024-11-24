/**
 * Компоенент, который отражает виджеты после баннера под строкой поиска 
 */

import React from "react";
import Weather from './widgets/Weather';
import Popular from './widgets/Popular';
import TvProgram from './widgets/TvProgram';
import Efir from './widgets/Efir';
import MapGerman from './widgets/MapGerman';
import weather from '../images/weather.jpg';

function Footer() {
    return (
        <div className="footer">
            <div>
                <Weather srcUrl={weather} temp='+17°' tempMorning='+17' tempEvening='+20' />
                <Popular popular={popular} />
            </div>
            <div>
                <MapGerman>Расписания</MapGerman>
                <TvProgram tvprogram={tvprogram} />
            </div>
            <div>
                <Efir efir={efir} />
            </div>
        </div>
    )
}

export default Footer;

const efir = [
    {
        name: 'Управление как искусство',
        programm: 'Успех',
        link: '#'
    },
    {
        name: 'Ночь. Мир это время',
        programm: 'earthTV',
        link: '#'
    },
    {
        name: 'Андрей Возн...',
        programm: 'Совершенно секретно',
        link: '#'
    }
]

const tvprogram = [
    {
        time: '02:00',
        kategor: 'ТНТ. Best',
        item: 'THT International',
        link: '#'
    },
    {
        time: '02:15',
        kategor: 'Джунглики',
        item: 'Карусель INT',
        link: '#'
    },
    {
        time: '02:25',
        kategor: 'Наедине со всеми',
        item: 'Первый',
        link: '#'
    }
]

const popular = [
    {
        kategor: 'Недвижимость',
        item: 'о сталинках',
        link: '#'
    },
    {
        kategor: 'Маркет',
        item: 'люстры и светильники',
        link: '#'
    },
    {
        kategor: 'Авто.ру',
        item: 'привод 4х4 до 500 000',
        link: '#'
    }
]