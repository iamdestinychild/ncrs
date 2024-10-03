import Image from "next/image";
import styles from "./styles.module.css"

export default function Organogram(){
    return(
        <main>
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
                            <h1 className={styles.page}>Organogram</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <h1 className={styles.section_two_container_heading}>ORGANOGRAM</h1>
                    <div className={styles.section_two_banner_cover}>
                        <Image src="/images/organogram.svg" alt="image" className={styles.section_two_banner} fill />
                    </div>
                </div>
            </section>
        </main>
    )
}