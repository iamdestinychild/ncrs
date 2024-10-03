import styles from "./styles.module.css"
import Image from "next/image"

export default function OurBackground(){
    return (
        <main className={styles.background}>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>About NCRS</span></p>
                    <p className={styles.heading_two}>Our Visions, Mission and Our Team</p>
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>OUR BACKGROUND</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_content_line}></div>
                    <h1>Our Background</h1>
                    <div className={styles.section_two_content_cover}>
                        <div className={styles.section_two_content}>
                            <article>
                                <p>The desire by Nigeria to establish its own comprehensive Remote Sensing Centre dates back to 1976, when the Government first made its intentions known during an Inter-Governmental meeting held in Addis Ababa, Ethiopia.  Prior to this pronouncement, several studies undertaken on-behalf of the Government have indicated the need for such a centre to be centrally located.  One of such studies was carried out by the Food and Agricultural Organization (FAO).Thus, in 1998, following a decision by the National Council of Ministers, approval was given for a National Centre for Remote Sensing to be established, with its Permanent Headquarters in Jos, and a Satellite Ground Receiving Station at Kerang, near Panyam, Plateau State (site of the defunct Aerostat Balloon project Ref. CM (88) 63,8th Meeting conclusion 5 and CM (88) 175 Meeting of National Council of Ministers.</p>
                                <p>In 1992, decree 33 established the National Agency for Science and Engineering Infrastructure (NASENI) as a replacement for the Federal Ministry of Science and Technology which became defunct the previous year. NASENI was charged with the responsibility to establish the National Centre for Remote Sensing, amongset other mandates.Thus, the National Centre for Remote Sensing which formally took off in October 1995 now operates under the aegis of the National Space Research and Development Agency (NASRDA).</p>
                            </article>
                        </div>
                        <div className={styles.section_two_banner_cover}>
                            <Image src="/images/ncrs-building.jpg" alt='image' className={styles.section_two_banner} fill/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}