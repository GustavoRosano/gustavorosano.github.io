import styles from '../../../styles/Home/principalSection.module.css'
import React from "react";
import Image from 'next/image';

import Avatar from '../../../assets/png/avatar.png'
import Github from '../../../assets/svg/github.svg'
import Linkedin from '../../../assets/svg/linkedin.svg'
import Whatsapp from '../../../assets/svg/whatsapp.svg'

const PrincipalSection = () => {

    return (
        <div id='inicio' className={styles.principalSection}>
            <div className={styles.principalSectionContainer}>
                <div className={styles.leftContainer}>
                    <p className={styles.firstText}>Criando interfaces funcionais e encantadoras.</p>
                    <h1 className={styles.title}>Sou Gustavo Rosano, Desenvolvedor Front-end</h1>
                    <p className={styles.secondText}>Apaixonado por tecnologia e inovação.</p>
                    <button
                        className={styles.button}
                        onClick={() => {
                            document.getElementById('sobre-mim')?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    >
                        Conheça minha jornada
                    </button>

                    <div className={styles.socialMedia}>
                        <a href='https://github.com/GustavoRosano/portifolio-gustavo-rosano' target="_blank" rel="noopener noreferrer"><Image src={Github} alt='github' className={styles.socialMediaIcon} /></a>
                        <a href='https://www.linkedin.com/in/gustavo-rosano/' target="_blank" rel="noopener noreferrer"><Image src={Linkedin} alt='Linkedin' className={styles.socialMediaIcon} /></a>
                        <a href='https://wa.me/5511988672712' target="_blank" rel="noopener noreferrer"><Image src={Whatsapp} alt='Whatsapp' className={styles.socialMediaIcon} /></a>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <Image src={Avatar} alt='avatar' className={styles.avatar} />
                </div>
                <button
                    className={`${styles.button} ${styles.buttonMobile}`}
                    onClick={() => {
                        document.getElementById('sobre-mim')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                >
                    Conheça minha jornada
                </button>
                <div className={`${styles.socialMedia} ${styles.socialMediaMobile}`}>
                    <a href='https://github.com/GustavoRosano/portifolio-gustavo-rosano' target="_blank" rel="noopener noreferrer"><Image src={Github} alt='github' className={styles.socialMediaIcon} /></a>
                    <a href='https://www.linkedin.com/in/gustavo-rosano/' target="_blank" rel="noopener noreferrer"><Image src={Linkedin} alt='Linkedin' className={styles.socialMediaIcon} /></a>
                    <a href='https://wa.me/5511988672712' target="_blank" rel="noopener noreferrer"><Image src={Whatsapp} alt='Whatsapp' className={styles.socialMediaIcon} /></a>
                </div>
            </div>
        </div>
    );
}

export default PrincipalSection;
