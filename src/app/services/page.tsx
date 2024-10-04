import styles from "./styles.module.css"
import Image from "next/image"
import Link from "next/link"
import Water from '../../../public/icons/Water'
import Geoscience from '../../../public/icons/GeoScience'
// import Policy from '../../../public/icons/Policy'
import Procurement from '../../../public/icons/Procurment'
// import Procurement from '../../../public/icons/Ict'
import Station from '../../../public/icons/Station'

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
                    <div className={styles.banner_text}>
                        <div className={styles.section_two_banner_container}>
                            <Image src='/images/service-img.jpg' alt='image' className={styles.section_two_banner} fill/>
                        </div>
                        <p>Nigeria&apos;s plan to establish a comprehensive Remote Sensing Centre dates back to 1976, following studies by the Food and Agricultural Organization (FAO) that emphasized the need for such a center. In 1998, the National Council of Ministers approved the establishment of the National Centre for Remote Sensing (NCRS) in Jos, with a Satellite Ground Receiving Station in Kerang, Plateau State. Initially overseen by the Federal Ministry of Science, Technology, and Innovation, responsibility shifted to the National Agency for Science and Engineering Infrastructure (NASENI) in 1992. The NCRS began operations in 1995 and now operates under the National Space Research and Development Agency (NASRDA), which was established in 1999. NCRS is responsible for satellite data acquisition, imagery distribution, and capacity building to support socio-economic development in Nigeria.</p>
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