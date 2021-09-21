import { Animator } from "@arwes/animation";
import { ArwesThemeProvider, Text } from "@arwes/core";
import Video from "../components/Video";

import styles from '../styles/Interesses.module.css'

export default function Interesses() {
    return (
        <ArwesThemeProvider>
            <Animator animator={{ root: true }}>
                <div className={styles.conteudo}>
                    <div>
                        <Text className={styles.estiloTexto}>
                            → Teoria de Controle
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.estiloTexto}>
                            → Robótica
                        </Text>
                    </div>
                    <div className={styles.explicarInteresses}>
                        <Text className={styles.espacoMeio}>
                            • Meu trabalho de conclusão de curso em <span className={styles.highlight}>Engenharia de Computação</span> pela 
                            <span className={styles.highlight}> UTFPR</span> foi na área de robótica móvel, com o tema: 
                            <span className={styles.highlight}> &quot;Navegação em robôs móveis por Arbitragem e Fusão em Arquiteturas Comportamentais&quot;</span>
                            <a href="https://raw.githubusercontent.com/mcarbonera/MonografiaRoboticaMovel/master/document.pdf"> (baixar pdf)</a>
                        </Text>
                        <Text className={styles.espacoMeio}>
                            • Este trabalho teve por intuito investigar o uso da <span className={styles.highlight}>Arquitetura Baseada em Comportamentos</span> em 
                            robótica. Foi desenvolvido um <span className={styles.highlight}>Controlador Híbrido</span> (Sistema a Eventos Discretos + Controladores 
                            de Variável Contínua) para implementar a estratégia de <span className={styles.highlight}>Arbitragem de Comportamentos</span> e um
                            <span className={styles.highlight}> Controlador Fuzzy</span> para estratégia de <span className={styles.highlight}>Fusão de 
                            Comportamentos</span>. Implementar em duas formas distintas permitiu compreender a arquitetura baseada em comportamentos em suas duas 
                            estratégias.
                        </Text>
                    </div>
                    <div className={styles.video}>
                        <Video url="https://www.youtube.com/embed/PS3rdL_LvIc"></Video>
                    </div>
                </div>
            </Animator>
        </ArwesThemeProvider>
    )
}