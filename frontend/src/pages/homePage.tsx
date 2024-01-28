import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Img } from "react-image";

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
        </div>
    );
}