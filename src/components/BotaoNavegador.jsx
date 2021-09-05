import Link from 'next/link'
import styles from '../styles/BotaoNavegador.module.css'

import React, { useState, useEffect } from 'react';
import { Animator } from '@arwes/animation';
import { ArwesThemeProvider, StylesBaseline, Text, Button, FrameHexagon } from '@arwes/core'
import { useRouter } from 'next/router';

React.useLayoutEffect = React.useEffect 

import { withRouter } from 'next/router';

export default withRouter(function BotaoNavegador(props) {
    
    const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';

    const [activate, setActivate] = useState(true);
    
    useEffect(() => {
        const timeout = setTimeout(() => setActivate(!activate), 2000);
        return () => clearTimeout(timeout);
    }, [activate]);

    const router = useRouter()

    return (
        <div className={styles.centralizar}>
        <ArwesThemeProvider>
            <StylesBaseline styles={{
                body: { fontFamily: ROOT_FONT_FAMILY },
                button: { margin: '0 0px 0 0' }
            }} />
            <Animator animator={{ animate: true }}>
                <Link href={props.destino} passHref>
                    <a>
                    <Button FrameComponent={FrameHexagon} active={props.active}
                    palette={router.pathname === props.destino ? 'success' : 'primary' }>
                        <Text>{props.texto}</Text>
                    </Button>
                    </a>
                </Link>
            </Animator>
        </ArwesThemeProvider>
        </div>
    )
})