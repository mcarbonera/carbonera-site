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
                            → Entre em contato por e-mail, inicialmente! <br/>
                            Podemos marcar contato por telefone ou videochamada. (:
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.estiloTexto}>
                            • Email: <a href = "mailto: marcelocarbonera@live.com">marcelocarbonera@live.com</a>
                        </Text>
                    </div>
                    <div>
                        <Text className={styles.estiloTexto}>
                            • GitHub: <a href="https://github.com/mcarbonera">https://github.com/mcarbonera</a>
                        </Text>
                    </div>  
                </div>
            </Animator>
        </ArwesThemeProvider>
    )
}