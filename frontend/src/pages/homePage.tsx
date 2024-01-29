import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Img } from "react-image";

//jpeg
//@ts-ignore
import HistoryBodyImg1 from "../img/homePage/historyBodyImg_1.jpg";

import "../styles/pageStyles/homePage.css";

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
                </div>
            </section>

            <section className="historyBody">
                <div className="container">
                    <h3 className="historyBody_tittle">История</h3>
                    <div className="historyBody_content">
                        <Img src={HistoryBodyImg1} className="historyBody_contentImg1"></Img>
                        <div className="historyBody_contentTexts">
                            <p className="historyBody_contentText">Институт промышленного транспортного проектирования "Минский Промтранспроект" создан в январе 1961 года как структурное подразделение Всесоюзного проектного и научно-исследовательского института промышленного транспорта "Промтрансниипроект" бывшего Госстроя СССР, который в свою очередь был организован в 1928 году. "Минский Промтранспроект" с 1991 года является членом-соучредителем Международной Ассоциации "Союзпромтрансниипроект", куда входят институты системы "Промтранспроект" в городах Москва, Санкт-Петербург, Киев, Минск, Харьков, Донецк, Екатеринбург, Алматы. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}