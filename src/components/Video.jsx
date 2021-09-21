import { Animator, AnimatorGeneralProvider } from "@arwes/animation";
import { ArwesThemeProvider, FrameLines, StylesBaseline } from "@arwes/core";
import Iframe from "react-iframe";

export default function Video(props) {
    const generalAnimator = { duration: { enter: 200, exit: 200 } };

    return (
        <ArwesThemeProvider>
            <StylesBaseline />
            <AnimatorGeneralProvider animator={generalAnimator}>
                <Animator animator={{ manager: 'stagger', root: true }}>
                    <FrameLines
                        palette='success'
                        largeLineWidth={2}
                        smallLineWidth={4}
                        smallLineLength={30}
                        hideShapes
                        hover
                    >
                        <Iframe url={props.url}
                            width="450px"
                            height="450px"
                            display="initial"
                            position="relative"
                            frameBorder="0"/>
                    </FrameLines>
                </Animator>
            </AnimatorGeneralProvider>
        </ArwesThemeProvider>
    )
}