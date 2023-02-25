import React from "react";
import ImgLogo from "../assets/logo-rocketseat.svg";

export default function Header() {
    return (
        <header>
            <div className="container">
                <img src={ImgLogo} alt="Rocketseat" />
                <div className="menu-section">
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Starter</a>
                            </li>
                            <li>
                                <a href="#">Bootcamp</a>
                            </li>
                            <li>
                                <a href="#">Comunidade</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
