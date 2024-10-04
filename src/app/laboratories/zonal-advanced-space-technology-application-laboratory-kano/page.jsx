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
                            <h1 className={styles.page}>Zonal Advanced Space Technology Application Laboratory  Kano</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_line}></div>
                    <h1 className={styles.section_two_heading}>Zonal Advanced Space Technology Application Laboratory (ZASTAL) Kano</h1>
                    <p className={styles.section_two_parapgrah}>It was established within the premise of the Federal University, Kashere, Gombe on the 13th July, 2016 at the North -East Geo-Political Zone of Nigeria with a specific mandate focusing on the environmental situation in Gombe and its environs.it is the fourth zonal laboratory to be established by NASRDA and coordinated by NCRS Jos.</p>
                </div>
            </section>
            <section className={styles.section_three}>
                <h1 className={styles.section_three_heading}>Coordinators</h1>
                <div className={styles.section_three_container}>
                    <div className={styles.section_three_cards}>
                        <div className={styles.section_three_card}>
                            <div className={styles.section_three_card_banner_cover}>
                                <Image src='/img/img-01.jpg' alt='img' className={styles.section_three_card_banner} fill />
                            </div>
                            <div className={styles.section_three_card_content}>
                                <h1>Dr Tudunwada Yakubu</h1>
                                <p>2022 to date</p>
                            </div>
                            {/* <Link href='#' className={styles.section_three_card_link}>View Profile</Link> */}
                        </div>
                        <div className={styles.section_three_card}>
                            <div className={styles.section_three_card_banner_cover}>
                                <Image src='/img/img-01.jpg' alt='img' className={styles.section_three_card_banner} fill />
                            </div>
                            <div className={styles.section_three_card_content}>
                                <h1>Mr Qudus Taiwo</h1>
                                <p>2022 to date</p>
                            </div>
                            {/* <Link href='#' className={styles.section_three_card_link}>View Profile</Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}