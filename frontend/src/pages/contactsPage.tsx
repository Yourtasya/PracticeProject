import React, { useContext, useState } from "react";

import "../styles/pageStyles/contactsPage.css";

// import { Img } from "react-image";

import "../styles/pageStyles/contactsPage.css";

export default function ContactsPage() {
    return (
        <div className="ContactsPage">
            <section className="FirstBlock">
                <div className="container">
                    <h2 className="FirstBlock_tittle">Контакты</h2>
                </div>
            </section>

            <div className="contactPage">
                <div className="containerContactPage">
                    <div className="contactPageSection1">
                        <div className="contactPageSection1_adress">
                            <h4 className="Section1_adressTittle">Адрес:</h4>
                            <p className="Section1_adressSubtittle">220123, г. Минск, ул. В.Хоружей, 13/61</p>
                        </div>
                        <div className="contactPageSection1_phone">
                            <h4 className="Section1_phoneTittle">Телефон для справок:</h4>
                            <p className="Section1_phoneSubtittle">+375 17 270-77-71</p>
                        </div>
                    </div>

                    <div className="contactPageSection2">
                        <div className="Section2_name">
                            <div className="Section2_name1">
                                <h4 className="Section2_nameTittleName1">директор</h4>
                                <h4 className="Section2_nameSubtittleName1">КИРИСЬ Юрий Петрович</h4>
                            </div>
                            <div className="Section2_name2">
                                <h4 className="Section2_nameTittleName1">Главный инженер</h4>
                                <h4 className="Section2_nameSubtittleName2">МЕЛЬНИКОВ Сергей Владимирович</h4>
                            </div>
                        </div>
                        <hr className="SectionLine" />
                        <div className="Section2_information">
                            <div className="Section2_information1">
                                <p className="Section2_informationText">Тел. +375 17 270-77-72</p>
                                <p className="Section2_informationText">Моб. +375 33 300-02-51</p>
                                <p className="Section2_informationText">E-mail: ptpminsk@mail.ru</p>
                            </div>
                            <div className="Section2_information2">
                                <p className="Section2_informationText">Моб. +375 33 300-02-52</p>
                                <p className="Section2_informationText">E-mail: ptpminsk@mail.ru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}