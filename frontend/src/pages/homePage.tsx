import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Img } from "react-image";

//jpeg
//@ts-ignore
import HistoryBodyImg1 from "../img/homePage/historyBodyImg_1.jpg";

//@ts-ignore
import WhyWeImg1 from "../img/homePage/WhyWe_img1.png";
//@ts-ignore
import WhyWeImg2 from "../img/homePage/WhyWe_img2.png";
//@ts-ignore
import PreformImg1 from "../img/homePage/performCart_img1.png";
//@ts-ignore
import PreformImg3 from "../img/homePage/performCart_img3.png";
//@ts-ignore
import PreformImg4 from "../img/homePage/performCart_img4.png";
//@ts-ignore
import PreformImg5 from "../img/homePage/performCart_img5.png";
//@ts-ignore
import PreformImg6 from "../img/homePage/performCart_img6.png";
//@ts-ignore
import PortfolioImg1 from "../img/homePage/portfolioCart_img1.png";
//@ts-ignore
import PortfolioImg2 from "../img/homePage/portfolioCart_img2.png";
//@ts-ignore
import PortfolioImg3 from "../img/homePage/portfolioCart_img3.png";

import "../styles/pageStyles/homePage.css";
import { CONTACTS_ROUTE } from "../links/consts";
import { HISTORY_ROUTE } from "../links/consts";
import { PROJECTS_ROUTE } from "../links/consts";


export default function HomePage() {
    return (
        <div className="HomePage">
            <section className="HomePageBody">
                <div className="container">
                    <div className="HomePageTexts">
                        <h1 className="HomePageTexts_tittle">Проектный институт
                            Минский Промтранспроект</h1>
                        <p className="HomePageTexts_subtittle">
                            ведущий в Беларуси по проектированию внешнего и внутризаводского промышленного железнодорожного и автомобильного транспорта, как в комплексе, так и по отдельным объектам его инфраструктуры.
                        </p>
                    </div>
                    <NavLink to={CONTACTS_ROUTE} className="HomePage_button">
                        Контакты
                    </NavLink>
                </div>
            </section>

            <section className="whyWe">
                <div className="whyWeContainer">
                    <h3 className="whyWeTittle">почему выбирают нас?</h3>
                    <div className="whyWeCarts">
                        <div className="whyWeCart">
                            <Img src={WhyWeImg1} className="whyWeCart_img"></Img>
                            <h4 className="whyWeCartsText_tittle">Индивидуальный подход</h4>
                            <p className="whyWeCartsText_subtittle">Большое количество завершенных проектов.</p>
                        </div>
                        <div className="whyWeCart">
                            <Img src={WhyWeImg2} className="whyWeCart_img"></Img>
                            <h4 className="whyWeCartsText_tittle">Квалифицированная команда</h4>
                            <p className="whyWeCartsText_subtittle">Большое количество завершенных проектов.</p>
                        </div>
                        <div className="whyWeCart">
                            <Img src={WhyWeImg1} className="whyWeCart_img"></Img>
                            <h4 className="whyWeCartsText_tittle">Индивидуальный подход</h4>
                            <p className="whyWeCartsText_subtittle">Большое количество завершенных проектов.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="historyBody">
                <div className="container">
                    <h3 className="historyBody_tittle">О нас</h3>
                    <div className="historyBody_content">
                        <Img src={HistoryBodyImg1} className="historyBody_contentImg1"></Img>
                        <div className="historyBody_contentTexts">
                            <p className="historyBody_contentText">Институт промышленного транспортного проектирования "Минский Промтранспроект" создан в январе 1961 года как структурное подразделение Всесоюзного проектного и научно-исследовательского института промышленного транспорта "Промтрансниипроект" бывшего Госстроя СССР, который в свою очередь был организован в 1928 году. "Минский Промтранспроект" с 1991 года является членом-соучредителем Международной Ассоциации "Союзпромтрансниипроект", куда входят институты системы "Промтранспроект" в городах Москва, Санкт-Петербург, Киев, Минск, Харьков, Донецк, Екатеринбург, Алматы. </p>
                            <NavLink to={HISTORY_ROUTE} className="HomePage_button">
                                Подробнее
                            </NavLink>
                        </div>
                    </div>

                </div>
            </section>

            <section className="perform">
                <div className="performContainer">
                    <h3 className="performTittle">Выполняем</h3>
                    <div className="performCarts">
                        <div className="performCart">
                            <Img src={PreformImg1} className="preformCart_img"></Img>
                            <h4 className="performCart_tittle">Инфраструктурное развитие транспорта:</h4>
                            <p className="performCart_subtittle">Генеральные схемы развития транспорта промрайонов и промышленных узлов.
                                Новые и реконструкция существующих железнодорожных станций и узлов.</p>
                        </div>
                        <div className="performCart">
                            <Img src={PreformImg1} className="preformCart_img"></Img>
                            <h4 className="performCart_tittle">Железнодорожные инженерные сооружения:</h4>
                            <p className="performCart_subtittle">Сортировочные устройства, вторые пути на однопутных участках, подъездные железнодорожные пути, грузовые дворы с механизацией погрузочно-разгрузочных и складских работ.</p>
                        </div>
                        <div className="performCart">
                            <Img src={PreformImg3} className="preformCart_img"></Img>
                            <h4 className="performCart_tittle">Пропускные сооружения::</h4>
                            <p className="performCart_subtittle">Эстакады и сооружения для пропуска коммуникаций при пересечении дорог.
                                Повышенные железнодорожные пути.</p>
                        </div>
                        <div className="performCart">
                            <Img src={PreformImg4} className="preformCart_img"></Img>
                            <h4 className="performCart_tittle">Транспортные сооружения::</h4>
                            <p className="performCart_subtittle">Новые и реконструкция автомобильных дорог.
                                Транспортные развязки, мосты, путепроводы, водопропускные трубы.</p>
                        </div>
                        <div className="performCart">
                            <Img src={PreformImg5} className="preformCart_img"></Img>
                            <h4 className="performCart_tittle">Системы управления и связи:</h4>
                            <p className="performCart_subtittle"> Устройства сигнализации, централизации и блокировки.
                                Участки диспетчерской централизации, автоблокировки, устройства связи.</p>
                        </div>
                        <div className="performCart">
                            <Img src={PreformImg6} className="preformCart_img"></Img>
                            <h4 className="performCart_tittle">Энергетика и техническое обеспечение:</h4>
                            <p className="performCart_subtittle">Здания, сооружения, внутренние и наружные инженерные системы, включая водопровод, канализацию, тепловые и электросети с удаленным управлением.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio">
                <div className="portfolioContainer">
                    <h3 className="portfolioTittle">Работы</h3>
                    <div className="portfolioCarts">
                        <div className="portfolioCart">
                            <div className="portfolioCartText">
                                <h4 className="portfolioCartText_tittle">Аэропорт "Минск-2"</h4>
                                <p className="portfolioCartText_subtittle">По проекту "Минского Промтранспроект" построен железнодорожный транспорт аэропорта "Минск-2" в составе железнодорожного пути протяженностью более 20 км</p>
                            </div>
                            <Img src={PortfolioImg1} className="portfolioCart_img"></Img>
                        </div>
                        <div className="portfolioCart">
                            <Img src={PortfolioImg2} className="portfolioCart_img"></Img>
                            <div className="portfolioCartText">
                                <h4 className="portfolioCartText_tittle">Автоматика и телемеханика движения поездов "Минск-2"</h4>
                                <p className="portfolioCartText_subtittle">По проекту "Минского Промтранспроект" построен железнодорожный транспорт аэропорта "Минск-2" в составе железнодорожного пути протяженностью более 20 км</p>
                            </div>
                        </div>
                        <div className="portfolioCart">
                            <div className="portfolioCartText">
                                <h4 className="portfolioCartText_tittle">Железнодорожная линия к АЭС</h4>
                                <p className="portfolioCartText_subtittle">По проекту "Минского Промтранспроект" построен железнодорожный транспорт аэропорта "Минск-2" в составе железнодорожного пути протяженностью более 20 км</p>
                            </div>
                            <Img src={PortfolioImg3} className="portfolioCart_img"></Img>
                        </div>
                    </div>
                    <div className="buttonPortfolio">
                        <NavLink to={PROJECTS_ROUTE} className="HomePage_button">
                            Подробнее
                        </NavLink>
                    </div>

                </div>
            </section>

            <section className="homePageContacts">
                <div className="container">
                    <div className="planeContacts">
                        <h3 className="planeContacts_tittle">Контакты</h3>
                        <h4 className="planeContacts_number">+375 17 270-77-71</h4>
                        <h4 className="planeContacts_city">Минск</h4>
                        <p className="planeContacts_street">ул. В.Хоружей, 13/61</p>

                    </div>

                </div>
            </section>
        </div>
    );
}