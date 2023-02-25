import React from "react";
import ImgMelhoresTecnologias from "../assets/melhores-tecnologias.svg";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div>
                    <h2>
                        As melhores tecnologias em programação, direto ao ponto
                        e do jeito certo.
                    </h2>
                    <p>
                        No meio de tanta informação e da quantidade de
                        ferramentas que surgem todos os dias, você precisa de
                        alguém que te leve na direção certa.
                    </p>
                    <a href="#" className="button">
                        Quero embarcar neste foguete!
                    </a>
                </div>
                <img src={ImgMelhoresTecnologias} alt="" />
            </div>
        </section>
    );
}
