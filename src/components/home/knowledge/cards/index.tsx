import styles from '../../../../styles/Home/knowledge.module.css'
import React from 'react'
import Image from 'next/image'

import Next from '../../../../assets/png/next.png'
import ReactJs from '../../../../assets/png/react.png'
import Tailwind from '../../../../assets/png/tailwind.png'
import Typescript from '../../../../assets/png/typescript.png'
import Vtex from '../../../../assets/png/vtex.png'
import Shopify from '../../../../assets/png/shopify.png'
import Wake from '../../../../assets/png/wake.png'

const Cards = () => {

    return (
        <div className={styles.slider}>
            <div className={styles.slideTrack}>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.next}`} src={Next} alt="Next" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.react}`} src={ReactJs} alt="ReactJs" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.tailwind}`} src={Tailwind} alt="Tailwind" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.typescript}`} src={Typescript} alt="Typescript" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.vtex}`} src={Vtex} alt="Vtex" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.shopify}`} src={Shopify} alt="Shopify" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.wake}`} src={Wake} alt="Wake" />
                </div>

                


                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.next}`} src={Next} alt="Next" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.react}`} src={ReactJs} alt="ReactJs" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.tailwind}`} src={Tailwind} alt="Tailwind" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.typescript}`} src={Typescript} alt="Typescript" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.vtex}`} src={Vtex} alt="Vtex" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.shopify}`} src={Shopify} alt="Shopify" />
                </div>
                <div className={styles.slide}>
                    <Image className={`${styles.image} ${styles.wake}`} src={Wake} alt="Wake" />
                </div>
            </div>
        </div>
    )
}

export default Cards;