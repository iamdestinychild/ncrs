import Image from "next/image";
import styles from "./styles.module.css"
import Link from "next/link";

export default function Management(){
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
                            <h1 className={styles.page}>Management Team</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <h1 className={styles.section_two_container_heading}>Management <span>Team</span></h1>
                    
                    <div className={styles.section_two_single_card}>    
                        <div className={styles.section_two_card}>
                            <div className={`${styles.section_two_card_banner_cover} ${styles.single_card_banner}`}>
                                <Image src="/images/person-1.jpg" className={styles.section_two_card_banner} alt='image' fill />
                            </div>
                            <div className={styles.section_two_card_text}>
                                <h1>Barrack Obama</h1>
                                <p>Managing Director</p>
                            </div>
                            <div className={styles.section_two_card_link_cover}>
                            <Link href="#" className={styles.section_two_card_link}>View Profile</Link>
                            </div>
                    </div>
                    </div>
                    

                    <div className={styles.section_two_cards}>
                        <div className={styles.section_two_card}>
                            <div className={styles.section_two_card_banner_cover}>
                                <Image src="/images/director.jpg" className={styles.section_two_card_banner} alt='image' fill />
                            </div>
                            <div className={styles.section_two_card_text}>
                                <h1>Barrack Obama</h1>
                                <p>Managing Director</p>
                            </div>
                            <div className={styles.section_two_card_link_cover}>
                            <Link href="#" className={styles.section_two_card_link}>View Profile</Link>
                            </div>
                        </div>

                        <div className={styles.section_two_card}>
                            <div className={styles.section_two_card_banner_cover}>
                                <Image src="/images/person-2.jpg" className={styles.section_two_card_banner} alt='image' fill />
                            </div>
                            <div className={styles.section_two_card_text}>
                                <h1>Barrack Obama</h1>
                                <p>Managing Director</p>
                            </div>
                            <div className={styles.section_two_card_link_cover}>
                            <Link href="#" className={styles.section_two_card_link}>View Profile</Link>
                            </div>
                        </div>

                        <div className={styles.section_two_card}>
                            <div className={styles.section_two_card_banner_cover}>
                                <Image src="/images/person-3.jpg" className={styles.section_two_card_banner} alt='image' fill />
                            </div>
                            <div className={styles.section_two_card_text}>
                                <h1>Barrack Obama</h1>
                                <p>Managing Director</p>
                            </div>
                            <div className={styles.section_two_card_link_cover}>
                            <Link href="#" className={styles.section_two_card_link}>View Profile</Link>
                            </div>
                        </div>

                        <div className={styles.section_two_card}>
                            <div className={styles.section_two_card_banner_cover}>
                                <Image src="/images/person-4.jpg" className={styles.section_two_card_banner} alt='image' fill />
                            </div>
                            <div className={styles.section_two_card_text}>
                                <h1>Barrack Obama</h1>
                                <p>Managing Director</p>
                            </div>
                            <div className={styles.section_two_card_link_cover}>
                            <Link href="#" className={styles.section_two_card_link}>View Profile</Link>
                            </div>
                        </div>

                        <div className={styles.section_two_card}>
                            <div className={styles.section_two_card_banner_cover}>
                                <Image src="/images/person-5.jpg" className={styles.section_two_card_banner} alt='image' fill />
                            </div>
                            <div className={styles.section_two_card_text}>
                                <h1>Barrack Obama</h1>
                                <p>Managing Director</p>
                            </div>
                            <div className={styles.section_two_card_link_cover}>
                            <Link href="#" className={styles.section_two_card_link}>View Profile</Link>
                            </div>
                        </div>

                        <div className={styles.section_two_card}>
                            <div className={styles.section_two_card_banner_cover}>
                                <Image src="/images/person-6.jpg" className={styles.section_two_card_banner} alt='image' fill />
                            </div>
                            <div className={styles.section_two_card_text}>
                                <h1>Barrack Obama</h1>
                                <p>Managing Director</p>
                            </div>
                            <div className={styles.section_two_card_link_cover}>
                            <Link href="#" className={styles.section_two_card_link}>View Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}