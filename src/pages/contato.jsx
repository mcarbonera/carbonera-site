import { Animator } from "@arwes/animation";
import { ArwesThemeProvider, Text} from "@arwes/core";

import styles from '../styles/Contato.module.css'

export default function Contato() {
    return (
        <ArwesThemeProvider>
            <Animator animator={{ root: true }}>
                <div className={styles.conteudo}>
                    <div className={styles.estiloTitulo}>
                        <Text>
                            → Olá! Tudo jóia?<br/>
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.estiloDescricao}>
                        • Inicialmente, fiz esse site pensando em demonstrar conhecimento, a fim de conseguir oportunidades mais facilmente.
                        </Text>
                        <Text className={styles.estiloDescricao2}>
                        • Porém, esse ambiente perdeu um pouco do sentido, já que optei pelo caminho do concurso público,
                        e todos sabem que isso, na tecnologia, é equivalente a ser um Lorde Sith. Sinceramente, estou adorando. &gt;=)
                        </Text>
                        <Text className={styles.estiloDescricao}>
                        → Se alguém quiser falar comigo, eu estou coringando mas ainda não mordo.<br/>
                        → E nem comecei a jogar pedra nas pessoas da rua!<br/>
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.estiloTexto}>
                            • Email: <a className={styles.links} href="mailto: marcelocarbonera@live.com">marcelocarbonera@live.com</a>
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.estiloTexto}>
                            • GitHub: <a className={styles.links} href="https://github.com/mcarbonera">https://github.com/mcarbonera</a>
                        </Text>
                    </div>
                </div>
            </Animator>
        </ArwesThemeProvider>
    )
}