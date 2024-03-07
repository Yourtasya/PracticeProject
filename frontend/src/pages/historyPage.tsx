import React, { useContext, useState } from "react";
import { Img } from "react-image";
import { NavLink } from "react-router-dom";


//jpeg
//@ts-ignore
import HistoryImg1 from "../img/historyPage/historyImg_1.jpg";
//@ts-ignore
import HistoryImg2 from "../img/historyPage/historyImg_2.jpg";
//@ts-ignore
import HistoryImg3 from "../img/historyPage/historyImg_3.jpg";
//@ts-ignore
import HistoryImg4 from "../img/historyPage/historyImg_4.jpg";
//@ts-ignore
import HistoryImg5 from "../img/historyPage/historyImg_5.jpg";
//@ts-ignore
import HistoryImg6 from "../img/historyPage/historyImg_6.jpg";

import "../styles/pageStyles/historyPage.css";

export default function HistoryPage() {
    return (
        <div className="HistoryPage">
            <section className="FirstBlock">
                <div className="container">
                    <h2 className="FirstBlock_tittle">История</h2>
                </div>
            </section>

            <section className="HistoryPage">
                <div className="container">
                    <div className="HistoryPageText">
                        <div className="HistoryPageText_texts">
                            <p className="HistoryPageText_text">
                                Институт промышленного транспортного проектирования "Минский Промтранспроект" создан в январе 1961 года как структурное подразделение Всесоюзного проектного и научно-исследовательского института промышленного транспорта "Промтрансниипроект" бывшего Госстроя СССР, который в свою очередь был организован в 1928 году. "Минский Промтранспроект" с 1991 года является членом-соучредителем Международной Ассоциации "Союзпромтрансниипроект", куда входят институты системы "Промтранспроект" в городах Москва, Санкт-Петербург, Киев, Минск, Харьков, Донецк, Екатеринбург, Алматы. "Минский Промтранспроект" в 1992 году стал базовой специализированной проектной организацией Госстроя РБ по строительному проектированию промышленного транспорта С ноября 1994 года "Минский Промтранспроект" в составе Министерства архитектуры и строительства РБ.
                            </p>

                            <p className="HistoryPageText_text">
                                По проектам "Минского Промтранспроект" построен транспорт (железные и автомобильные дороги) всех крупных предприятий Республики Беларусь, включая Мозырьский и Новополоцкий нефтеперерабатывающие заводы, ПО "БеларусКалий", БелАЗ в г. Жодино, ПО "Азот" в г. Гродно, ПО "Химволокно" и ТЭЦ-1 в г. Могилеве, ПО "Белшина", ж.-д. транспорт аэропорта "Минск-2", построено 19 новых железнодорожных станций (в т.ч. такие крупные как Барбаров, Новополоцк, Ситница, Шабаны, Центролит и др.). Построен транспорт Минской АТЭЦ, которая в процессе строительства была переведена в Минскую ТЭЦ-5; выполнена реконструкция и техническое перевооружение (путевое развитие, СЦБ, связь, электроснабжение, контактная сеть, освещение) 390 станций и построено ж.-д. путей общей протяженностью 2880 км; через Солигорское водохранилище на территории, подрабатываемой калийными комбинатами, построены мосты: автодорожный длиной 280 м и железнодорожный - 180 м . В 2012 году завершено строительство железнодорожной линии к строящейся Белорусской АЭС и городской скоростной электрички в г. Минске.
                            </p>
                            <p className="HistoryPageText_text">
                                В разные годы по нашим проектам осуществлено строительство ряда объектов транспорта на территории России: Дорогобужский завод азотных удобрений, химкомбинат на ст. Юльевка (район г. Балаково), Балаковская АЭС, Калининградская, Саратовская, Куйбышевская, Смоленская и Астраханская ТЭЦ, реконструкция ж.-д. транспорта Волгоградской ГРЭС, завод "Атоммаш" в г. Волгодонске и др.; Литвы: Каунаская ТЭЦ-2, Вильнюская ТЭЦ-3; Эстонии: ПО "Эстонсланец".
                            </p>
                            <p className="HistoryPageText_text">В 2010 году реализован строительством проект "Подъездные железнодорожные пути необщего пользования к базе стройиндустрии Котельниковского района Волгоградской области" (заказчик ООО "ЕвроХим-ВолгаКалий"). В 2010 г. разработана проектная и рабочая документация внешнего железнодорожного транспорта горно-обогатительного комплекса по добыче и обогащению калийных солей Гремяченского месторождения Котельниковского района Волгоградской области (заказчик ООО "ЕвроХим-ВолгаКалий").</p>
                            <p className="HistoryPageText_text">Проекты института выполнены качественно, имеют собственные разработки и внедрение новейших прогрессивных решений и технологий в строительстве, за что 26 работников удостоены правительственных наград, 5 человек награждены медалями ВДНХ СССР, за выдающиеся проекты группе работников присуждена премия Совета Министров СССР.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="currentProjects">
                <div className="container">
                    <div className="currentProjectsTexts">
                        <h3 className="currentProjectsTexts_tittle">настоящее</h3>
                        <p className="currentProjectsTexts_subtittle">институт выполняет разработку проектов внешнего и внутриплощадочного транспорта объектов:</p>
                    </div>

                    <div className="currentProjectsObjects">
                        <div className="currentProjectsObjects_categories categories">
                            <Img src={HistoryImg1} className="categoriesImg"></Img>
                            <h4 className="categoriesTittle">горно-обогатительный комплекс </h4>
                            <p className="categoriesSubtittle">Мощностью от 1,1 до 2,0 млн. тонн хлорида калия в год на сырьевой базе Нежинского участка Старобинского месторождения калийных солей (Минская обл.), заказчик ИООО "Славкалий"</p>
                        </div>
                        <div className="currentProjectsObjects_categories categories">
                            <Img src={HistoryImg2} className="categoriesImg"></Img>
                            <h4 className="categoriesTittle">Петриковский горно-обогатительный комплекс</h4>
                            <p className="categoriesSubtittle">(Гомельская обл.),
                                заказчик ОАО "Беларуськалий"</p>
                        </div>
                        <div className="currentProjectsObjects_categories categories">
                            <Img src={HistoryImg3} className="categoriesImg"></Img>
                            <h4 className="categoriesTittle">горно-обогатительный комбинат</h4>
                            <p className="categoriesSubtittle">Горно-обогатительный комбинат мощностью 1,4 млн. тонн в год хлорида калия на базе Горлыкского месторождения калийных солей в Лебапском валаяте Туркменистана</p>
                        </div>
                        <div className="currentProjectsObjects_categories categories">
                            <Img src={HistoryImg4} className="categoriesImg"></Img>
                            <h4 className="categoriesTittle">Светлогорский ЦБК</h4>
                            <p className="categoriesSubtittle">по инвестиционной программе КНР (Гомельская обл.)</p>
                        </div>
                        <div className="currentProjectsObjects_categories categories">
                            <Img src={HistoryImg5} className="categoriesImg"></Img>
                            <h4 className="categoriesTittle">Китайско-Белорусского индустриального парка</h4>
                            <p className="categoriesSubtittle">(район аэропорта "Минск");</p>
                        </div>
                        <div className="currentProjectsObjects_categories categories">
                            <Img src={HistoryImg6} className="categoriesImg"></Img>
                            <h4 className="categoriesTittle">завод легковых автомобилей</h4>
                            <p className="categoriesSubtittle">в г. Жодино (Минская обл.)</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}