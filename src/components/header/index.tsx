import styles from '../../styles/header.module.css';
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                        <a href='/' className={styles.headerLink}>Início</a>
                        <a href='/' className={styles.headerLink}>Sobre Mim</a>
                        <a href='/' className={styles.headerLink}>Projetos</a>
                        <a href='/' className={styles.headerLink}>Conhecimentos</a>
                        <a href='/' className={styles.headerLink}>Contato</a>
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
                <a href='/' className={styles.mobileLink} onClick={toggleMenu}>Início</a>
                <a href='/' className={styles.mobileLink} onClick={toggleMenu}>Sobre Mim</a>
                <a href='/' className={styles.mobileLink} onClick={toggleMenu}>Projetos</a>
                <a href='/' className={styles.mobileLink} onClick={toggleMenu}>Conhecimentos</a>
                <a href='/' className={styles.mobileLink} onClick={toggleMenu}>Contato</a>
            </div>
        </>
    );
}

export default Header;
