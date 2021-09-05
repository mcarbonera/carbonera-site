import BotaoNavegador from "./BotaoNavegador";
import styles from '../styles/Cabecalho.module.css'
import React from "react";

export default function Cabecalho() {

    const opcoesBotoes = [
        {
            texto: "Sobre",
            destino: "/",
        },
        {
            texto: "Contato",
            destino: "/contato",
        },
        {
            texto: "Currículo",
            destino: "/curriculo",
        },
        {
            texto: "Projetos",
            destino: "/projetos",
        },
        {
            texto: "Interesses",
            destino: "/interesses",
        }
    ]
    
    return (
        <header className={styles.navegador}>
            {opcoesBotoes.map((elem, it) => {
                return <BotaoNavegador key={it} texto={elem.texto} destino={elem.destino} />
            })}
        </header>
    )
}