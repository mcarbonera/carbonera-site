import { Animator } from "@arwes/animation";
import { ArwesThemeProvider, Text } from "@arwes/core";

import styles from '../styles/Curriculo.module.css'

export default function Curriculo() {
    return (
        <ArwesThemeProvider>
            <Animator animator={{ root: true }}>
                <div className={styles.conteudo}>
                    <div>
                        <Text className={styles.estiloTexto}>
                            → Sou formado em Engenharia de Computação pela UTFPR.
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.espacoMeio}>
                            → Tenho experiência em sistemas embarcados (microcontrolador Texas Tiva <span className={styles.highlight}>TM4C1294</span>).
                        </Text>
                    </div>
                    <div>
                        <Text>
                            → Backend com framework <span className={styles.highlight}>SpringBoot</span>.
                        </Text>
                    </div>
                    <div>
                        <Text>
                            → Frontend com framework <span className={styles.highlight}>Angular</span>.
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.espacoMeio}>
                            • Outras tecnologias / frameworks que estudei, porém não trabalhei profissionalmente: 
                            <ul className={styles.highlight}>
                                <li>Node (Express)</li>
                                <li>React</li>
                                <li>Next.js (este site *lindo* foi feito usando Next.js)</li>
                                <li>Vue.js</li>
                                <li>Electron.js</li>
                            </ul>
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.espacoMeio}>
                            → Para currículo completo, favor entrar em contato!
                        </Text>
                    </div>
                </div>
            </Animator>
        </ArwesThemeProvider>
    )
}