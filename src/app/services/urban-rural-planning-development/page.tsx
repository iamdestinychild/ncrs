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
                        <h1>Urban and Rural Planning and Development</h1>
                        <p>NCRS&apos;s Urban and Rural Planning and Development assists in the strategic planning and sustainable development of Nigeria&apos;s urban and rural areas through geo-spatial technologies.</p>
                    </div>
                    <div className={styles.banner_text}>
                        <div className={styles.section_two_banner_container}>
                            <Image src='/images/services-04.jpg' alt='image' className={styles.section_two_banner} fill/>
                        </div>
                        <div className={styles.banner_text_content}>
                            <p className={styles.content_p}>We offer:</p>
                            <ul className={styles.content_list}>
                                <li>Land Use Planning: Create comprehensive land use plans to guide development.</li>
                                <li>Urban Growth Monitoring: Track and manage urban expansion and development.</li>
                                <li>Infrastructure Development: Optimize the planning and  development of infrastructure projects.</li>
                            </ul>
                       </div>
                    </div>
                    <div className={styles.application}>
                        <h1>Applications</h1>
                        <ul>
                            <li>Smart Cities: Support the development of smart, sustainable urban areas.</li>
                            <li>Rural Development: Enhance rural planning to improve living conditions and economic opportunities.</li>
                            <li>Disaster Risk Reduction: Plan and develop infrastructure to mitigate the impact of natural disasters.</li>
                        </ul>
                    </div>
                    <div className={styles.impact}>
                        <h1>Impact</h1>
                        <p>These helps to promote balanced development, improve living conditions, and ensure that both urban and rural areas are sustainably managed.</p>
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
                        <Link href='/services/urban-rural-planning-development' className={`${styles.card} bg-primary text-white`}>
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
                        <Link href='/services/cadastral-mapping' className={styles.card}>
                            <Geoscience customStyle={styles.icon}/>
                            <h1>Cadastral Mapping</h1>
                        </Link>
                    </div>
                </div>
           </section>
        </main>
    )
}