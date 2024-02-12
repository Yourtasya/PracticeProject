import React, { Component } from "react";

import "../styles/Footer.css";

import { Img } from "react-image";
import { NavLink } from "react-router-dom";




export default class NavBar extends Component {
    render(): React.ReactNode {
        return (
            <div className="Footer">
                <div className="container">
                    <div className="footerObjects">
                        <div className="footerLogo"></div>
                        <div className="footerMenu">
                            <div className="footerMenu_text1"></div>
                            <div className="footerMenu_text1"></div>

                        </div>
                        <div className="footerContacts"></div>
                    </div>

                </div>
            </div>
        );
    }
}