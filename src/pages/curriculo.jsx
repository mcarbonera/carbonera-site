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
                            • Pós-graduações (cursando):
                            <ul className={styles.highlight}>
                                <li>Machine Learning in Production (UFSCAR)</li>
                                <li>Programação para Dispositivos Móveis (UTFPR)</li>
                            </ul>
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.despedida}>
                            → Para currículo completo, favor não entrar em contato! 
                            Não estou mais disponível.
                            Agora só quero saber de concursos públicos. 
                        </Text>
                        <Text className={styles.espacoMeio}>
                            → Psicólogas de RH, xô!! Vaza!! 
                            Não tenho softskill suficiente pra isso.
                            Vão caçar um gato pra criar!!
                        </Text>
                        <Text className={styles.despedida}>
                            → Peço desculpas, coringuei. Agora, com sua licença, preciso ir embora.
                            Antes, porém, o meu boa noite amável.
                        </Text>
                    </div>
                </div>
            </Animator>
        </ArwesThemeProvider>
    )
}