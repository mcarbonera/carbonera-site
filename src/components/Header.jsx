import BotaoNavegador from "./BotaoNavegador";
import styles from '../styles/Header.module.css'
import React from "react";

export default function Header() {

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
                return (
                    <div key={it} className={styles.centralizar}>
                        <BotaoNavegador key={it} texto={elem.texto} destino={elem.destino} />
                    </div>
                )
            })}
        </header>
    )
}