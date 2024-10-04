import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

export default function about(){
    return(
        <>
        <main className={styles.about}>
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
                            <h1 className={styles.page}>About Us</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_content_line}></div>
                    <h1>About NCRS</h1>
                    <div className={styles.section_two_content_cover}>
                        <div className={styles.section_two_content}>
                            <article>
                                <p>The National Centre for Remote Sensing (NCRS), Jos is a parastatal of the Federal Ministry of Science and Technology and one of the six development centres of excellence under the National Space Research and Development Agency(NASRDA),Abuja.As a pivotal entity within the Nigerian government’s scientific and technological framework, the Centre plays a crucial role in the nation’s space research and development initiatives. Its primary focus is on harnessing advanced remote sensing technologies to drive innovation, enhance scientific research, and support sustainable development across various sectors.The Centre contributes significantly to the advancement of space science, environmental monitoring, natural resource management, and disaster management. By collaborating with local and international stakeholders, the centre aims to foster a robust scientific community, promote capacity building, and facilitate the application of remote sensing and related technologies in addressing contemporary challenges and opportunities</p>
                            </article>
                        </div>
                        <div className={styles.section_two_banner_cover}>
                            <Image src="/images/ncrs-building.jpg" alt='image' className={styles.section_two_banner} fill/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_three}>
                <h1 className={styles.section_three_heading}>Core Values</h1>
                <div className={styles.section_three_cards}>
                        <div className={styles.section_three_card}>
                            <div className={styles.blur}></div>
                        <div className={styles.section_three_card_banner_cover}>
                            <Image src='/images/img-03.png' alt="image" className={styles.section_three_card_banner_cover} fill/>
                        </div>
                        <div className={styles.section_three_card_heading_cover}>
                        <p className={styles.section_three_card_heading}>Professionalism</p>
                        </div>
                    </div>

                        <div className={styles.section_three_card}>
                        <div className={styles.blur}></div>
                        <div className={styles.section_three_card_banner_cover}>
                            <Image src='/images/img-04.png' alt="image" className={styles.section_three_card_banner_cover} fill/>
                        </div>
                        <div className={styles.section_three_card_heading_cover}>
                        <p className={styles.section_three_card_heading}>Integrity</p>
                        </div>
                    </div>

                        <div className={styles.section_three_card}>
                        <div className={styles.blur}></div>
                        <div className={styles.section_three_card_banner_cover}>
                            <Image src='/images/img-05.png' alt="image" className={styles.section_three_card_banner_cover} fill/>
                        </div>
                        <div className={styles.section_three_card_heading_cover}>
                        <p className={styles.section_three_card_heading}>TeamWork</p>
                        </div>
                    </div>

                        <div className={styles.section_three_card}>
                        <div className={styles.blur}></div>
                        <div className={styles.section_three_card_banner_cover}>
                            <Image src='/images/img-06.png' alt="image" className={styles.section_three_card_banner_cover} fill/>
                        </div>
                        <div className={styles.section_three_card_heading_cover}>
                        <p className={styles.section_three_card_heading}>Excellence</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_four}>
                <div className={styles.section_four_cards}>
                    <div className={styles.section_four_card}>
                        <h1>OUR VISION</h1>
                        <article>
                            <p>NCRS is committed to being a Centre of excellence in the provision of Geo-informatics
                            services for sustainable Development.</p>
                        </article>
                    </div>

                    <div className={styles.section_four_card}>
                        <h1>OUR MISSION</h1>
                        <article>
                            <p>Advancing knowledge through research and  applications of Remote Sensing, GIS and related  technologies for the identification, inventory, 
                            development and management of natural and  human resources.</p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
