import { Animator } from "@arwes/animation";
import { ArwesThemeProvider, Text } from "@arwes/core";

import styles from '../styles/Projetos.module.css'

export default function Projetos() {
    return (
        <ArwesThemeProvider>
            <Animator animator={{ root: true }}>
                <div className={styles.conteudo}>
                    <div>
                        <Text className={styles.estiloTexto}>
                            → webcrawLeilao
                        </Text>
                    </div>
                    <div>
                        <Text>
                            Web Crawler para extração de dados de leilões de bovinos com intuito de detectar/prever
                            lotes com bom custo benefício.
                        </Text>
                    </div>

                    <div className={styles.espacoMeio}>
                        <Text className={styles.estiloTexto}>
                            → Estamparia 4.0
                        </Text>
                    </div>
                    <div>
                        <Text>
                            Aplicar conceitos de indústria 4.0 a uma estamparia serigráfica. 
                        </Text>
                    </div>
                </div>
            </Animator>
        </ArwesThemeProvider>
    )
}