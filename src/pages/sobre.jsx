import React from "react";
import { ArwesThemeProvider, Button, Text } from "@arwes/core";
import { Animator } from '@arwes/animation';

import Figura from "../components/Figura";
import styles from '../styles/Sobre.module.css'

export default function Sobre() {    
  const IMAGE_URL = '/CaraBonito2.jpg';

  return (
    <div>
      <ArwesThemeProvider>
        <div className={styles.centralizarImagem}>
          <div className={styles.tamanhoImagem}>
            <Figura src={IMAGE_URL} alt={'cara bonito'} />
          </div>
           <Animator animator={{ root: true }}>
            <div>
              <Button palette='success' className={styles.nomeDescricao}>
                <Text>Marcelo Carbonera</Text>
              </Button>
              <div className={styles.estiloDescricao}>
                <Text>Engenheiro de Computação | Pedreiro high-tech | Lindo | Cheiroso </Text>
              </div>
            </div>
            </Animator>
        </div>
      </ArwesThemeProvider>
    </div>
  )
}