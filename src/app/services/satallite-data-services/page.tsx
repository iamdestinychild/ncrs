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
                    <p className={styles.heading_two}>Our Visions, Mission and Our Team</p>
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
                        <h1>Satellite Data Services</h1>
                        <p>The National Centre for Remote Sensing (NCRS) provides comprehensive Satellite Data Services, utilizing cutting-edge satellite imagery to support a wide range of applications across Nigeria. These services are facilitated by our Ground Receiving Station.</p>
                    </div>
                    <div className={styles.banner_text}>
                        <div className={styles.section_two_banner_container}>
                            <Image src='/images/services-01.jpg' alt='image' className={styles.section_two_banner} fill/>
                        </div>
                        <div className={styles.banner_text_content}>
                            <p className={styles.content_p}>We offer:</p>
                            <ul className={styles.content_list}>
                                <li>High-Resolution Imagery: Det ailed satellite images that are crucial for monitoring land use, urban development, and environmental changes.</li>
                                <li>Data Analysis and Interpretation: Our team of experts analyzes satellite data to extract valuable insights for decision-making.</li>
                                <li>Custom Data Solutions: Tailored satellite data services  to meet specific needs of government agencies, private sector entities, and research institutions.</li>
                            </ul>
                       </div>
                    </div>
                    <div className={styles.application}>
                        <h1>Applications</h1>
                        <ul>
                            <li>Agricultural Monitoring: Track crop health, estimate yields, and optimize farming practices.</li>
                            <li>Environmental Management: Monitor deforestation, urban sprawl, and changes in natural habitats.</li>
                            <li>Disaster Response: Provide real-time data for effective disaster management and mitigation efforts.</li>
                        </ul>
                    </div>
                    <div className={styles.impact}>
                        <h1>Impact</h1>
                        <p>Our satellite data services enhance the capacity of stakeholders to make informed decisions, promoting sustainable development and efficient resource management in Nigeria.</p>
                    </div>
                    <div className={styles.cards}>
                        <Link href='/services/satallite-data-services' className={`${styles.card} bg-primary text-white`}>
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
                            <Geoscience className={styles.icon}/>
                            <h1>Geo-Informatics</h1>
                        </Link>
                        <Link href='/services/cadastral-mapping' className={styles.card}>
                            <Geoscience className={styles.icon}/>
                            <h1>Cadastral Mapping</h1>
                        </Link>
                    </div>
                </div>
           </section>
        </main>
    )
}