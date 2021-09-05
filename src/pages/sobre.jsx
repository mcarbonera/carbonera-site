import { ArwesThemeProvider, Button } from "@arwes/core";

import { Animator } from '@arwes/animation';

import React from "react";
import { Text } from '@arwes/core';
import Figura from "../components/Figura";

import styles from '../styles/Sobre.module.css'

export default function Sobre() {
    
  const IMAGE_URL = '/CaraBonito2.jpg';
    const [activate, setActivate] = React.useState(true);

    
    
    return (
      <div>
        <ArwesThemeProvider>
          <div className={styles.centralizarImagem}>
            <div className={styles.tamanhoImagem}>
              <Figura src={IMAGE_URL} alt={'cara bonito'} />
            </div>
            <Animator animator={{ animate: true }}>
              <div>
                <Button palette='success' className={styles.nomeDescricao}>
                  <Text>Marcelo Carbonera</Text>
                </Button>
                <div className={styles.estiloDescricao}>
                  <Text palette="success">Desenvolvedor fullstack focado em comer o cu de quem ta lendo</Text>
                </div>
              </div>
              <Text className={styles.leftAlign}>Afasdfasdhflaksjdhflksadjfhlkasjdfh</Text>
            </Animator>
          </div>
        </ArwesThemeProvider>
      </div>
    )
}