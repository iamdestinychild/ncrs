import styles from "./styles.module.css"
import Image from "next/image"
import Link from "next/link"
import Water from '../../../../public/icons/Water'
import Geoscience from '../../../../public/icons/GeoScience'
// import Policy from '../../../public/icons/Policy'
import Procurement from '../../../../public/icons/Procurment'
// import Procurement from '../../../public/icons/Ict'
import Station from '../../../../public/icons/Station'

export default function Services(){
    return(
        <main>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>Services</span></p>
                    {/* <p className={styles.heading_two}>Our Visions, Mission and Our Team</p> */}
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Our Services</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_inner}>
                    <div className={styles.section_two_heading}>
                    <div className={styles.section_two_content_line}></div>
                        <h1>Cadastral Mapping</h1>
                        <p>Our Cadastral Mapping service provides accurate and up-to-date maps for land administration and property management, utilizing high-resolution imagery and advanced mapping techniques.</p>
                    </div>
                    <div className={styles.banner_text}>
                        <div className={styles.section_two_banner_container}>
                            <Image src='/images/services-08.jpg' alt='image' className={styles.section_two_banner} fill/>
                        </div>
                        <div className={styles.banner_text_content}>
                            <p className={styles.content_p}>We offer:</p>
                            <ul className={styles.content_list}>
                                <li>Boundary Delineation: Accurately map property boundaries for land registration.</li>
                                <li>Land Registration Support: Assist in the process of  registering land and property.</li>
                                <li>Dispute Resolution: Provide precise maps to help resolve land disputes.</li>
                            </ul>
                       </div>
                    </div>
                    <div className={styles.application}>
                        <h1>Applications</h1>
                        <ul>
                            <li>Agriculture: Optimize farming practices through precise spatial data.</li>
                            <li>Transportation: Plan and manage transportation networks efficiently.</li>
                            <li>Public Health: Track and manage public health data spatially for better resource allocation.</li>
                        </ul>
                    </div>
                    <div className={styles.cards}>
                    <Link href='/services/satallite-data-services' className={styles.card}>
                            <Water customStyle={`${styles.icon} bg-white`}/>
                            <h1>Satellite Data Services</h1>
                        </Link>
                        <Link href='/services/forestry-environment' className={styles.card}>
                            <Station customStyle={styles.icon} />
                            <h1>Forestry and Environment</h1>
                        </Link>
                        <Link href='/services/natural-resource-mapping' className={styles.card}>
                            <Procurement customStyle={styles.icon} />
                            <h1>Natural Resource Mapping</h1>
                        </Link>
                        <Link href='/services/urban-rural-planning-development' className={styles.card}>
                            <Procurement customStyle={styles.icon} />
                            <h1>Urban and Rural Planning and Development</h1>
                        </Link>
                        <Link href='/services/water-resources' className={styles.card}>
                            <Station customStyle={styles.icon} />
                            <h1>Water Resources</h1>
                        </Link>
                        <Link href='/services/disaster-management' className={styles.card}>
                            <Procurement customStyle={styles.icon} />
                            <h1>Disaster Management</h1>
                        </Link>
                        <Link href='/services/geo-informatics' className={styles.card}>
                            <Geoscience customStyle={styles.icon}/>
                            <h1>Geo-Informatics</h1>
                        </Link>
                        <Link href='/services/cadastral-mapping' className={`${styles.card} bg-primary text-white`}>
                            <Geoscience customStyle={styles.icon}/>
                            <h1>Cadastral Mapping</h1>
                        </Link>
                    </div>
                </div>
           </section>
        </main>
    )
}