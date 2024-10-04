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
                            <h1 className={styles.page}>Corporative Information Network</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_line}></div>
                    <h1 className={styles.section_two_heading}>Corporative Information Network (COPINE) South-West Zonal Lab. Ile-Ife</h1>
                    <p className={styles.section_two_parapgrah}>It was established in 1995 at the South Western zone of Nigeria through the initiative of the UN office for outer space affairs (UNOSA) with the aim of responding to the immediate information exchange needs of African countries for development. COPINE was later transferred in JUNE 2010 to NASRDA with the approval of the honorable minister of science and technology and refocused a new mandate on the application of remote sensing and GIS for sustainable national economic development. COPINE is the first regional space application laboratory located in the south west geopolitical zone of Nigeria for space technology application to bring its product and services to relevant stakeholders in the region and environs.it is first of the six (6) space application laboratories established by NASRDA and coordinated by National Centre for Remote Sensing Jos.</p>
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
                                <h1>Dr Toafik Alaga</h1>
                                <p>2014 to date</p>
                            </div>
                            {/* <Link href='#' className={styles.section_three_card_link}>View Profile</Link> */}
                        </div>
                        <div className={styles.section_three_card}>
                            <div className={styles.section_three_card_banner_cover}>
                                <Image src='/img/img-01.jpg' alt='img' className={styles.section_three_card_banner} fill />
                            </div>
                            <div className={styles.section_three_card_content}>
                                <h1>Dr Eguaroje Ezekiel</h1>
                                <p>April, 2011 to June 2014</p>
                            </div>
                            {/* <Link href='#' className={styles.section_three_card_link}>View Profile</Link> */}
                        </div>
                        <div className={styles.section_three_card}>
                            <div className={styles.section_three_card_banner_cover}>
                                <Image src='/img/img-01.jpg' alt='img' className={styles.section_three_card_banner} fill />
                            </div>
                            <div className={styles.section_three_card_content}>
                                <h1>Dr Toafik Alaga</h1>
                                <p>2014 to date</p>
                            </div>
                            {/* <Link href='#' className={styles.section_three_card_link}>View Profile</Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}