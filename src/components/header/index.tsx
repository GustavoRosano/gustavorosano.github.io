import styles from '../../styles/header.module.css';
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.logoSection}>
                        <img src="/logo.png" alt="logo" className={styles.logo} />
                        <p className={styles.name}>Gustavo Rosano</p>
                    </div>
                    <div className={styles.linksContainer}>
                        <button className={styles.headerLink} onClick={() => scrollToSection("inicio")}>Início</button>
                        <button className={styles.headerLink} onClick={() => scrollToSection("sobre-mim")}>Sobre Mim</button>
                        <button className={styles.headerLink} onClick={() => scrollToSection("projetos")}>Projetos</button>
                        <button className={styles.headerLink} onClick={() => scrollToSection("conhecimentos")}>Conhecimentos</button>
                        <button className={styles.headerLink} onClick={() => scrollToSection("contato")}>Contato</button>
                    </div>
                </div>
            </div>

            <div className={styles.headerMobile}>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <div className={styles.logoSection}>
                    <img src="/logo.png" alt="logo" className={styles.logo} />
                    <p className={styles.name}>Gustavo Rosano</p>
                </div>
            </div>

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
                <button className={styles.mobileLink} onClick={() => { scrollToSection("inicio"); toggleMenu(); }}>Início</button>
                <button className={styles.mobileLink} onClick={() => { scrollToSection("sobre-mim"); toggleMenu(); }}>Sobre Mim</button>
                <button className={styles.mobileLink} onClick={() => { scrollToSection("projetos"); toggleMenu(); }}>Projetos</button>
                <button className={styles.mobileLink} onClick={() => { scrollToSection("conhecimentos"); toggleMenu(); }}>Conhecimentos</button>
                <button className={styles.mobileLink} onClick={() => { scrollToSection("contato"); toggleMenu(); }}>Contato</button>
            </div>
        </>
    );
}

export default Header;
