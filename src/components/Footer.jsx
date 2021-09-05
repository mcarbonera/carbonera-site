import styles from '../styles/Footer.module.css'
import IconeChip from './IconeChip'

export default function Footer() {
    return (
        <div className={styles.footerContent}>
            <div>
                <div className={styles.gitHubIcon}>
                    <div className={styles.icone}>
                        <IconeChip></IconeChip>
                    </div>
                    <a href="https://github.com/mcarbonera" target="github" rel="noreferrer">GitHub</a>
                </div>
            </div>
            <div className={styles.footerText, styles.autorGostosao}>
                Marcelo G. Carbonera
            </div>
        </div>
    )
}