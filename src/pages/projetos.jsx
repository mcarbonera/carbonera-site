import { Animator } from "@arwes/animation";
import { ArwesThemeProvider, Text } from "@arwes/core";

import styles from '../styles/Projetos.module.css'

export default function Projetos() {
    return (
        <ArwesThemeProvider>
            <Animator animator={{ root: true }}>
                <div className={styles.conteudo}>
                    beleza
                </div>
            </Animator>
        </ArwesThemeProvider>
    )
}