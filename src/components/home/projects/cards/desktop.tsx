import styles from '../../../../styles/Home/projects/projects.module.css';
import React, { useState, useEffect } from 'react';

import mariaDolores from "@/assets/png/maria-dolores.png";
import cdf from "@/assets/png/cdf.png";
import shoptemas from "@/assets/png/shoptemas.png";
import oba from "@/assets/png/oba.png";
import iuds from "@/assets/png/iuds.png";
import brindear from "@/assets/png/brindear.png";

const projects = [
    // {
    //     title: "Maria Dolores",
    //     role: "Freelancer",
    //     image: mariaDolores,
    //     technologies: ["Vtex IO", "React.Js", "Javascript"],
    //     description: "E-commerce desenvolvido do zero com VTEX IO, em colaboração com outros desenvolvedores para uma entrega ágil e eficiente.",
    //     link: "https://www.mariadolores.com.br"
    // },
    {
        title: "Casa do Fitness",
        role: "Freelancer",
        image: cdf,
        technologies: ["Wake", "Javascript"],
        description: "E-commerce criado do zero com a plataforma Wake Commerce.",
        link: "https://www.casadofitness.com.br"
    },
    {
        title: "Shoptemas",
        role: "Freelancer",
        image: shoptemas,
        technologies: ["Shopify", "Javascript"],
        description: "E-commerce criado do zero utilizando Shopify.",
        link: "https://shoptemas.com.br"
    },
    {
        title: "Oba Hortifruti",
        image: oba,
        technologies: ["Vtex IO", "React.Js", "Typescript", "Javascript"],
        description: "Atuei por cerca de 2 anos na empresa e no projeto, desenvolvendo diversos componentes e páginas.",
        link: "https://www.obahortifruti.com.br"
    },
    {
        title: "IUDS - Concursos",
        role: "Freelancer",
        image: iuds,
        technologies: ["React.Js", "Javascript", "Electron"],
        description: "Como um dos meus primeiros projetos como freelancer, desenvolvi um sistema para a realização de concursos online. As provas eram geradas com questões aleatórias, baseadas em um banco de dados, e realizadas em uma sala virtual semelhante ao Google Meet. Infelizmente, este projeto não está disponível para visualização, pois se trata de um sistema exclusivo da empresa."
    },
    {
        title: "Brindear",
        role: "Freelancer",
        image: brindear,
        technologies: ["Wordpress"],
        description: "Não desenvolvi o projeto do zero, mas criei componentes e funcionalidades para aprimorar o site.",
        link: "https://www.brindear.com.br"
    }
];

const CardsDesktop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setCardsToShow(1);
            } else if (window.innerWidth <= 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + cardsToShow;
            return nextIndex >= projects.length ? 0 : nextIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex - cardsToShow;
            if (newIndex < 0) {
                const remainder = projects.length % cardsToShow;
                newIndex = projects.length - (remainder === 0 ? cardsToShow : remainder);
            }
            return newIndex;
        });
    };

    return (
        <div className={styles.cards}>
            <button onClick={handlePrev}>


                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.4594 29.9776L39.4054 9.94864H22.4692V2.0205C21.724 -0.0448673 20.9306 -0.312606 19.0669 0.267968L0.694087 18.294C-0.0400985 19.2411 -0.404828 19.799 0.694087 21.7991L19.0669 39.5748C21.0886 40.4483 21.8153 40.0418 22.4692 37.7388V29.9776H27.4594Z" fill="white" />
                </svg>
            </button>
            {projects.slice(currentIndex, currentIndex + cardsToShow).map((project, index) => (
                <div key={index} className={styles.card} style={{ backgroundImage: `url(${project.image.src})` }}>

                    {project.role && <p className={styles.infoProject}>{project.role}</p>}
                    <p className={styles.cardTitle}>{project.title}</p>
                    <div className={styles.technologies}>
                        {project.technologies.map((tech, i) => (
                            <p key={i} className={styles.technologie}>{tech}</p>
                        ))}
                    </div>
                    <div className={styles.cardContent}>
                        <p className={styles.projectInfo}>{project.description}</p>
                        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardButton}>Visualizar Projeto</a>}
                    </div>
                </div>
            ))}
            <button onClick={handleNext}>


                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.447021 29.8536L12.498 9.94307H17.3488V1.91194C17.8686 0.120216 18.5657 -0.164815 20.2289 0.0714744L39.177 18.1415C40.2988 19.6857 40.2497 20.4863 39.177 21.8225L20.2289 39.9762C18.2423 40.1241 17.7145 39.5956 17.3488 38.052V29.8536H0.447021Z" fill="white" />
                </svg>
            </button>
        </div>
    );
}

export default CardsDesktop;
