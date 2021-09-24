import { Animator } from '@arwes/animation'
import { ArwesThemeProvider, StylesBaseline } from '@arwes/core'
import { FrameBox } from '@arwes/core/lib/FrameBox/FrameBox.component'
import React from 'react'
import Header from '../components/Header'
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
              <FrameBox className="frameBoxSize" animator={{ animate: true }} palette="primary">
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
      <Header></Header>
      {containerBox()}
      <Footer></Footer>
    </div>
  )
}

export default MyApp