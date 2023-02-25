import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import ImgMelhoresTecnologias from "../assets/melhores-tecnologias.svg";

export default function Hero() {
    const styles = {
        box: {
            flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
            },
        } as SxProps,
    };

    return (
        <section className="hero">
            <Box className="container" sx={styles.box}>
                <Box>
                    <Typography variant="h3">
                        As melhores tecnologias em programacao, direto ao ponto
                        e do jeito certo.
                    </Typography>
                    <p>
                        No meio de tanta informacao e da quantidade de
                        ferramentas que surgem todos os dias, voce precisa de
                        alguem que te leve na direcao certa.
                    </p>
                    <a href="#" className="button">
                        Quero embarcar neste foguete!
                    </a>
                </Box>
                <img src={ImgMelhoresTecnologias} alt="" />
            </Box>
        </section>
    );
}
