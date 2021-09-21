import { Animator, AnimatorGeneralProvider } from '@arwes/animation';
import { ArwesThemeProvider, Figure } from '@arwes/core';
import React from 'react'

export default function Figura(props) {
  
  const generalAnimator = { duration: { enter: 200, exit: 200 } };
  const [activate, setActivate] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 2000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
      <ArwesThemeProvider>
        <AnimatorGeneralProvider animator={generalAnimator}>
          <Animator animator={{ manager: 'stagger', root: true }}>
            <Figure
              src={props.src}
              alt={props.alt}
              preload
              >
              {props.children}
            </Figure>
          </Animator>
        </AnimatorGeneralProvider>
      </ArwesThemeProvider>
  )
}