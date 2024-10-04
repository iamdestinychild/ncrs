import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { RightArrow } from '../../../components/IconsPalette'


export default function Department(){
    return(
        <main className={styles.department}>
        <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>About NCRS</span></p>
                    {/* <p className={styles.heading_two}>Our Visions, Mission and Our Team</p> */}
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>Our divisions and functions</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Departments</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_inner}>

                <h1>POLICY, PLANNING AND RESEARCH (PPR)</h1>
                <div className={styles.content}>
                
                    <p>The Policy, Planning, and Research (PPR) Department is essential to the Centre&apos;s effective functioning, responsible for preparing the annual budget and coordinating the production of the Centre&apos;s annual report. </p>
                    <p>It also oversees monitoring and evaluation of both ongoing and completed projects. Additionally, the PPR Department handles policy development, strategic planning, research analysis, performance management, and reporting, ensuring the Centre&apos;s activities are aligned with its goals and objectives.</p>
                    <div className={styles.banner_cover}>
                        <Image src='/images/img-20.jpg' alt='image' className={styles.banner} fill/>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_image_cover}>
                        <Image src='/images/person-10.jpg' alt='image' className={styles.card_image} fill/>
                    </div>
                    <div className={styles.card_details}>
                        <h1>Yehoshua gwongtok nyamdang</h1>
                        <p>Head of department</p>
                    </div>
                </div>
                </div>
            </section>
        </main>
    )
}

