import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    HOME_ROUTE,
    HISTORY_ROUTE,
} from "../links/consts";

export default function NavBar() {

    const [isOpen, setOpen] = useState<boolean>();
    return (
        <nav className="NavBar">
            <div className="container NavBarContainer ">
                <div className={`NavBar_points${isOpen ? "_active" : ""}`}>
                    <NavLink to={HOME_ROUTE} className="NavBar_point">Главная</NavLink>
                    <NavLink to={HISTORY_ROUTE} className="NavBar_point">История</NavLink>
                    <a href="" className="NavBar_point">Работы</a>
                    <a href="" className="NavBar_point">Лицензии</a>
                    <a href="" className="NavBar_point">Награды</a>
                    <a href="" className="NavBar_point">Аренда</a>
                    <a href="" className="NavBar_point">Документы</a>
                    <a href="" className="NavBar_point">Контакты</a>
                </div>
            </div>
        </nav>
    );
}