import styles from '../../../styles/Home/projects/projects.module.css'
import React from 'react'

import CardsDesktop from './cards/desktop';
import CardsMobile from './cards/tablet-mobile';


const Projects = () => {

    return (
        <div id='projetos' className={styles.projects}>
            <div className={styles.projectsContainer}>
                <h2 className={styles.title}>Projetos</h2>
                <div className={styles.carouselContainer}>
                    <CardsDesktop />
                    <CardsMobile />
                </div>
            </div>
        </div>
    );
}

export default Projects;