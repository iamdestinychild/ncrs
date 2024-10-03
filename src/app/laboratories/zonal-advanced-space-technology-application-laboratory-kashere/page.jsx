import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function CorporativeInformationNetwork(){
    return(
        <main>
             <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_two}>Labs</p>
                    <p className={styles.heading_one}>Home / <span>Labs</span></p>
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Zonal Advanced Space Technology Application Laboratory  Kashere</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_line}></div>
                    <h1 className={styles.section_two_heading}>Zonal Advanced Space Technology Application Laboratory (ZASTAL) Kashere</h1>
                    <p className={styles.section_two_parapgrah}>It was established in 2012 at the South-South Geo-Political Zone of Nigeria with a specific mandate focusing on the environmental situation of the Niger Delta and its surrounding environs.it is the second Zonal Laboratory to be established by NASRDA and coordinated by NCRS Jos.</p>
                </div>
            </section>
            <section className={styles.section_three}>
                <h1 className={styles.section_three_heading}>COORDINATORS</h1>
                <div className={styles.section_three_container}>
                    <div className={styles.section_three_cards}>
                        <div className={styles.section_three_card}>
                            <div className={styles.section_three_card_banner_cover}>
                                <Image src='/img/img-01.jpg' alt='img' className={styles.section_three_card_banner} fill />
                            </div>
                            <div className={styles.section_three_card_content}>
                                <h1>Mr Hyelpandawa Yaro</h1>
                                <p>2016 to date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}