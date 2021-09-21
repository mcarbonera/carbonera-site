import { Animator } from '@arwes/animation'
import { ArwesThemeProvider, StylesBaseline } from '@arwes/core'
import { FrameBox } from '@arwes/core/lib/FrameBox/FrameBox.component'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const containerBox = () => {
    return (
      <div className="centralizaBox">
      <ArwesThemeProvider>
        <StylesBaseline />
          {/* 
           */}
          <Animator animator={{ animate: true }}>
            <div className="cardCentral1">
              <FrameBox animator={{ animate: true }} palette="primary">
                <div className="cardCentral2">
                  <Component {...pageProps} />
                </div>
              </FrameBox>
            </div>
          </Animator>
          {/* 
          */}
      </ArwesThemeProvider>
      </div>
    );
  };

  return (
    <div className="posicaoPagina">
      <Cabecalho></Cabecalho>

      {/* 
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <motion.div key={slug} exit={{ opacity: 0 }}>
          {containerBox()}
        </motion.div>
      </AnimatePresence>
      */}
      {/* 
      {containerBox()}
      */}
    {containerBox()}
      <Footer></Footer>
    </div>
  )
}

export default MyApp
