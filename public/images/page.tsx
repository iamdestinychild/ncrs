import styles from "./styles.module.css"
import Image from "next/image"

export default function Mandate(){
    return (
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
                            <h1 className={styles.page}>OUR MANTADE</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_content_line}></div>
                    <h1>Our Mandate</h1>
                    <div className={styles.section_two_content_cover}>
                        <div className={styles.section_two_content}>
                            <article>
                                <p>The National Centre for Remote Sensing is charged with the following mandates:</p>
                                <ul>
                                    <li>To undertake pure and applied research, development and to operate Ground Receiving Station capable of receiving data from various satellite systems.</li>
                                    <li>To undertake action-oriented research and development with the application of RS/GIS technologies.</li>
                                    <li>To undertake promotional activities such as Conferences, seminars, Workshops, production of Newsletters etc.on the practical applications of Remote Sensing.</li>
                                </ul>
                            </article>
                        </div>
                        <div className={styles.section_two_banner_cover}>
                            <Image src="/img/img-13.jpg" alt='image' className={styles.section_two_banner} fill/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_three}>
                <div className={styles.section_three_container}>
                    <div className={styles.section_three_text}>
                        <ul>
                            <li>Conduct training programmes for the benefit of resource planners, managers, decision-makers, researchers and the general public.</li>
                            <li>To promote and sponsor local development of inventory of natural resources (e.g. solid minerals, petroleum, forestry etc.) and provide data for environmental monitoring and management.</li>
                            <li>To encourage and assist public/private sector users to establish in-house Remote Sensing and GIS outfits, and render Consultancy and Extension Services to such outfits and other organizations.</li>
                            <li>To develop joint programmes with any public or private organization whose objectives are in line with national interests for economic development, especially in the field of Remote Sensing, GIS and GPS technologies.</li>
                            <li>To generate income through services and sale of products developed by the NCRS</li>
                        </ul>
                    </div>
                    <div className={styles.section_three_banner_cover}>
                        <Image src="/img/mandate-card-image-02.jpeg" className={styles.section_three_banner} alt="img" fill />
                    </div>
                </div>
            </section>
        </main>
    )
}