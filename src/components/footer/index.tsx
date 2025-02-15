import styles from '../../styles/footer.module.css';
import React from "react";

const Footer = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.footer}>
            <div className={styles.headerContainer}>
                <a href='#inicio' className={styles.logo}><img src="/logo.png" alt="logo" className={styles.logo} /></a>
                <div className={styles.rightColumn}>
                    <div className={styles.navigationLinks}>
                        <h3 className={styles.linkTitle}>Navegação</h3>
                        <button className={styles.footerLink} onClick={() => scrollToSection("inicio")}>Início</button>
                        <button className={styles.footerLink} onClick={() => scrollToSection("sobre-mim")}>Sobre Mim</button>
                        <button className={styles.footerLink} onClick={() => scrollToSection("projetos")}>Projetos</button>
                        <button className={styles.footerLink} onClick={() => scrollToSection("conhecimentos")}>Conhecimentos</button>
                    </div>
                    <div className={styles.navigationLinks}>
                        <h3 className={styles.linkTitle}>Links úteis</h3>
                        <a href="https://www.figma.com/design/ee2O5c7O5IsRg1tqECuAof/Projetos-Portif%C3%B3lio?node-id=0-1&t=O2NHx8pE3nfQuzhH-1" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Figma do portfólio</a>
                        <a href="https://github.com/GustavoRosano" className={styles.footerLink} target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://www.linkedin.com/in/gustavo-rosano/" className={styles.footerLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className={styles.rights}>
                <p className={styles.rightsText}>© 2025 Gustavo Rosano Teixeira. Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
