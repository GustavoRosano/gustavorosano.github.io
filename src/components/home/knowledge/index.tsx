import styles from '../../../styles/Home/knowledge.module.css'
import React from 'react'

import Cards from './cards';

const Knowledge = () => {

    return (
        <div id='conhecimentos' className={styles.knowledge}>
            <div className={styles.knowledgeContainer}>
                <h2 className={styles.title}>Conhecimentos</h2>
                <Cards />
            </div>
        </div>
    );
}

export default Knowledge;