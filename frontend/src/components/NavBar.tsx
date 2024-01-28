import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    HOME_ROUTE,
    HISTORY_ROUTE,
    CONTACTS_ROUTE,
    DOCUMENTS_ROUTE,
    PROJECTS_ROUTE,
    RENT_ROUTE,
    AWARDS_ROUTE
} from "../links/consts";

export default function NavBar() {

    const [isOpen, setOpen] = useState<boolean>();
    return (
        <nav className="NavBar">
            <div className="container NavBarContainer ">
                <div className={`NavBar_points${isOpen ? "_active" : ""}`}>
                    <NavLink to={HOME_ROUTE} className="NavBar_point">Главная</NavLink>
                    <NavLink to={HISTORY_ROUTE} className="NavBar_point">История</NavLink>

                    <NavLink to={PROJECTS_ROUTE} className="NavBar_point">Работы</NavLink>

                    <NavLink to={HISTORY_ROUTE} className="NavBar_point">Лицензии</NavLink>

                    <NavLink to={AWARDS_ROUTE} className="NavBar_point">Награды</NavLink>

                    <NavLink to={RENT_ROUTE} className="NavBar_point">Аренда</NavLink>

                    <NavLink to={DOCUMENTS_ROUTE} className="NavBar_point">Документы</NavLink>

                    <NavLink to={CONTACTS_ROUTE} className="NavBar_point">Контакты</NavLink>
                </div>
            </div>
        </nav>
    );
}