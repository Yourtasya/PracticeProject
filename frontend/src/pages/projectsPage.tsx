import React, { useContext, useState } from "react";
import { Img } from "react-image";


import "../styles/pageStyles/projectsPage.css";

//@ts-ignore
import ProjectsImg1 from "../img/projectsPage/projectPage_img1.png";
//@ts-ignore
import ProjectsImg2 from "../img/projectsPage/projectPage_img2.png";
//@ts-ignore
import ProjectsImg3 from "../img/projectsPage/projectPage_img3.png";
//@ts-ignore
import ProjectsImg4 from "../img/projectsPage/projectPage_img4.png";

export default function ProjectsPage() {
    return (
        <div className="ProjectsPage">
            <section className="FirstBlock">
                <h2 className="FirstBlock_tittle">Проекты</h2>
            </section>
            <div className="container">
                <div className="ProjectsPageContent">
                    <div className="ProjectsPageContent_section">
                        <Img src={ProjectsImg1} className="projectsImg"></Img>
                        <div className="ProjectsPageContentText">
                            <h5 className="ProjectsPageContentText_tittle">Аэропорт "Минск-2"</h5>
                            <p className="ProjectsPageContentText_text">По проекту "Минского Промтранспроект" построен железнодорожный транспорт аэропорта "Минск-2" в составе железнодорожного пути протяженностью более 20 км, с развитием станции примыкания "Смолевичи" и строительством станции "Аэропорт" со всеми сопутствующими сооружениями и обустройствами</p>
                            <p className="ProjectsPageContentText_text">(СЭЗ), выносом из г. Минска авиаремонтного завода и организацией пассажирских перевозок по железной дороге из г. Минска в аэропорт "Минск-2".</p>
                        </div>
                    </div>
                    <div className="ProjectsPageContent_section">
                        <div className="ProjectsPageContentText">
                            <h5 className="ProjectsPageContentText_tittle">Железнодорожный мост через реку Мухавец по проспекту Республики в г. Брест</h5>
                            <p className="ProjectsPageContentText_text">Схема сооружения 24 + 33 + 55 + 2 х 22 + 24. Мост запроектирован под вновь введенную нагрузку А14, РК-112. Категория улицы А6. Габаритные размеры 2 х 12,5 + 2 х 3,0 м. Пролетные строения длиной 24 и 33 метра - из цельноперевозимых преднапряженных железобетонных балок таврового сечения. Русловой пролет длинной 55 метров - сталежелезобетонное пролетное строение индивидуальной проектировки. Крайние опоры козлового типа на свайном основании. Промежуточные опоры индивидуальной проектировки - массивные даухстолбчатые на свайных основаниях. Подмостовой габарит 10,5 м.</p>
                        </div>
                        <Img src={ProjectsImg2} className="projectsImg"></Img>
                    </div>
                    <div className="ProjectsPageContent_section">
                        <Img src={ProjectsImg3} className="projectsImg"></Img>
                        <div className="ProjectsPageContentText">
                            <h5 className="ProjectsPageContentText_tittle">Автоматика и телемеханика движения поездов</h5>
                            <p className="ProjectsPageContentText_text">В 2006 году введена в эксплуатацию автоблокировка с централизованным размещением аппаратуры и тональными рельсовыми цепями (без изолирующих стыков) участка Гомель - Калинковичи. Протяженность участка 118 км.</p>
                            <p className="ProjectsPageContentText_text">В 2008 году введена в эксплуатацию диспетчерская централизация "Неман" участка Осиповичи - Молодечно с 15 станциями электрической централизации.</p>
                            <p className="ProjectsPageContentText_text">Разрабатывается ПСД микропроцессорной централизации системы МПЦ-И станции "Парк Погрузки ПРУП "Кричевцементношифер" и блочной, на модернизированных блоках, ЭЦ станции "Михеевичи" Белорусской железной дороги.</p>
                        </div>
                    </div>
                    <div className="ProjectsPageContent_section">
                        <div className="ProjectsPageContentText">
                            <h5 className="ProjectsPageContentText_tittle">Железнодорожная линия к АЭС</h5>
                            <p className="ProjectsPageContentText_text">Проектирование и строительство осуществляются параллельно. В настоящее время выполняются строительно-монтажные работы 1-го и 2-го этапов строительства, включающие сооружение 14,5 км железнодорожных путей, трех малых и двух средних мостов. Завершается разработка проектно-сметной документации 3-го этапа строительства. По 4-му этапу строительства под руководством дирекции строительства АЭС ведется вариантная проработка по увязке решений внешнего железнодорожного транспорта с внутриплощадными железнодорожными путями производственной (строительной) базы и площадк АЭС с целью выбора наиболее компактной и экономичной схемы компоновки генплана указанных площадок.</p>
                        </div>
                        <Img src={ProjectsImg4} className="projectsImg"></Img>
                    </div>
                </div>
            </div>
        </div>
    );
}