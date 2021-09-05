import { Animator } from '@arwes/animation'
import { ArwesThemeProvider, StylesBaseline } from '@arwes/core'
import { FrameBox } from '@arwes/core/lib/FrameBox/FrameBox.component'
import Cabecalho from '../components/Cabecalho'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const containerBox = () => {
    return (
      <div className="centralizaBox">
      <ArwesThemeProvider>
        <StylesBaseline />
          <Animator animator={{ animate: true }}>
            <div className="cardCentral1">
            <FrameBox animator={{ animate: true }}>
              <div className="cardCentral2">
                <Component {...pageProps} />
              </div>
            </FrameBox>
            </div>
          </Animator>
      </ArwesThemeProvider>
      </div>
    );
  };

  return (
    <div className="posicaoPagina">
      <Cabecalho></Cabecalho>
      {containerBox()}
      <Footer></Footer>
    </div>
  )
}

export default MyApp
