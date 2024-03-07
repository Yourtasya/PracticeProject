import React, { Component } from "react";

import "../styles/Footer.css";

import { Img } from "react-image";
import { NavLink } from "react-router-dom";

//@ts-ignore
import LogoFooter from "../icons/LogoIcon.svg";

import {
    HOME_ROUTE,
    HISTORY_ROUTE,
    CONTACTS_ROUTE,
    DOCUMENTS_ROUTE,
    PROJECTS_ROUTE,
    RENT_ROUTE,
    AWARDS_ROUTE
} from "../links/consts";


export default class NavBar extends Component {
    render(): React.ReactNode {
        return (
            <div className="Footer">
                <div className="container">
                    <div className="footerObjects">
                        <div className="footerLogo">
                            <Img className="SvgImgInNavBar" src={LogoFooter}></Img>
                            <hr className="FooterLine" />
                            <label className="NameProjectInFooter">Минский Промтранспроект</label>
                        </div>
                        <div className="footerMenu">
                            <div className="footerMenu_text1">
                                <NavLink to={HOME_ROUTE} className="footerMenu_text1_point">Главная</NavLink>
                                <NavLink to={HISTORY_ROUTE} className="footerMenu_text1_point">История</NavLink>
                                <NavLink to={PROJECTS_ROUTE} className="footerMenu_text1_point">Проекты</NavLink>

                            </div>
                            <div className="footerMenu_text1">
                                <NavLink to={RENT_ROUTE} className="footerMenu_text1_point">Аренда</NavLink>
                                <NavLink to={DOCUMENTS_ROUTE} className="footerMenu_text1_point">Документы</NavLink>
                                <NavLink to={CONTACTS_ROUTE} className="footerMenu_text1_point">Контакты</NavLink>
                            </div>

                        </div>
                        <div className="footerContacts">
                            <h4 className="footerContacts_tittle">Контакты:</h4>
                            <div className="footerAdress">
                                <p className="footerAdress_adressTittle">Адрес:</p>
                                <p className="footerAdress_adress">220123, г. Минск, ул. В.Хоружей, 13/61</p>
                            </div>
                            <div className="footerPhone">
                                <p className="footerPhone_tittle">Телефон</p>
                                <p className="footerPhone_phone">+375 17 270-77-71</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}