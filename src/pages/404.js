import { Animator, AnimatorGeneralProvider } from '@arwes/animation';
import { ArwesThemeProvider, FrameLines, StylesBaseline, Text } from '@arwes/core';
import Image from 'next/image'
import Link from 'next/link';

import styles from '../styles/NotFound.module.css'

const FourOhFour = () => {
	const generalAnimator = { duration: { enter: 200, exit: 200 } };

  	return (
		<div className={styles.container}>
			<Image 
				width={'274'}
				height={'274'}
				className={styles.imagem} 
				src="/notFound.jpg"
				alt="NotFound">
			</Image>	
			<div className={styles.text}>
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
								hover>
								<div className={styles.textContent}>
									<div className={styles.title}>
										<Text>404</Text>
									</div>
									<div className={styles.subtitle}>
										<Text>Página não encontrada!</Text>
									</div>
									<div className={styles.link}>
										<Text>
											<Link href="/">
												<a>Navegar para o início!</a>
											</Link>
										</Text>
									</div>
								</div>
							</FrameLines>
						</Animator>
					</AnimatorGeneralProvider>
				</ArwesThemeProvider>
			</div>
		</div>
  	);
};

export default FourOhFour;