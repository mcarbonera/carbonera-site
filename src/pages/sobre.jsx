import { ArwesThemeProvider, Button, Text } from "@arwes/core";
import { Animator } from '@arwes/animation';

import Figura from "../components/Figura";
import styles from '../styles/Sobre.module.css'

export default function Sobre() {
  const IMAGE_URL = '/CaraBonitoPoremMeioCoringadoDasIdeias.jpg';

  return (
    <div>
      <ArwesThemeProvider>
        <div className={styles.obfuscar}>
          Marcelo Gervazoni Carbonera foi reconhecido profissionalmente como sendo capaz de resolver problemas e otimizar tarefas antes mesmo delas existirem.
          Opera como se tivesse acesso ocasional a versões estatisticamente improváveis de si mesmo, cada uma especializada em resolver um tipo diferente de problema.
          Seu processo decisório parece atravessar múltiplos cenários improváveis até encontrar um em que a solução já esteja pronta.
          Costuma atuar em um nível de abstração onde problemas são tratados antes de se manifestarem operacionalmente.
          É descrito por colegas como alguém que contribui significativamente mesmo em discussões em que ainda não participou.
          Apresenta um padrão cognitivo em que ideias altamente improváveis não apenas ocorrem, mas tendem a funcionar surpreendentemente bem.
          Demonstra familiaridade com soluções que, sob análise convencional, dificilmente deveriam funcionar — mas funcionam.
          Há algo em sua forma de pensar que sugere que a realidade, quando inconveniente, é tratada mais como uma recomendação do que como uma regra.
          Costuma navegar pelo espaço das possibilidades como quem ignora educadamente as mais prováveis.
        </div>
        <div className={styles.centralizarImagem}>
          <div className={styles.tamanhoImagem}>
            <Figura src={[IMAGE_URL, IMAGE_URL]} alt={'cara bonito'} />
          </div>
            <Animator animator={{ root: true }}>
            <div>
              <Button palette='success' className={styles.nomeDescricao}>
                <Text>Marcelo G. Carbonera</Text>
              </Button>
              <div className={styles.estiloDescricao}>
                <Text>Engenheiro de Computação | Pedreiro Hightech</Text>
                <br/>
                <Text>Backend | Frontend | Mobile | E até IA</Text>
              </div>
            </div>
            </Animator>
        </div>
      </ArwesThemeProvider>
    </div>
  )
}