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
                            → Olá! Tudo joia?<br/>
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.estiloDescricao}>
                        • Inicialmente, fiz esse site pensando em demonstrar conhecimento, a fim de conseguir oportunidades mais facilmente.
                        </Text>
                        <Text className={styles.estiloDescricao2}>
                        • Porém, o resultado foi que hoje eu não quero nem saber do setor privado, optei pelo caminho do concurso público 
                        e todos sabem que isso, na tecnologia, é equivalente a ser um Lorde Sith. Sinceramente, estou adorando. &gt;=)
                        </Text>
                        <Text className={styles.estiloDescricao}>
                        (Paguem seus impostos ao império, rebeldes! Se não pagar, eu faço concurso pra fiscal!)
                        </Text>
                    </div>
                    <div className={styles.estiloTitulo}>
                        <Text>
                            → Se alguém quiser falar comigo, eu estou coringando mas não mordo (ainda)<br/>
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