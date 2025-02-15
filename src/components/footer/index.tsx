import styles from '../../styles/footer.module.css';
import React from "react";

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.headerContainer}>
                <img src="/logo.png" alt="logo" className={styles.logo} />
                <div className={styles.rightColumn}>
                    <div className={styles.navigationLinks}>
                        <h3 className={styles.linkTitle}>Navegação</h3>
                        <a href='/' className={styles.footerLink}>Início</a>
                        <a href='/' className={styles.footerLink}>Sobre Mim</a>
                        <a href='/' className={styles.footerLink}>Projetos</a>
                        <a href='/' className={styles.footerLink}>Conhecimentos</a>
                    </div>
                    <div className={styles.navigationLinks}>
                        <h3 className={styles.linkTitle}>Links úteis</h3>
                        <a href='/' className={styles.footerLink}>Figma do portifólio</a>
                        <a href='/' className={styles.footerLink}>Github</a>
                        <a href='/' className={styles.footerLink}>Linkedin</a>
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
