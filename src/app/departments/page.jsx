import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { RightArrow } from '../../components/IconsPalette'
import WebDepartment from '../../components/webDepartment/webdepartment'


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
                    <h1>Departments</h1>
                    <div>
                        <div>
                            <h1>Water resources & Climate</h1>
                        </div>
                        <div>
                            <h1>Ground Receiving Station</h1>
                        </div>
                        <div>
                            <h1>Procurement</h1>
                        </div>
                        <div>
                            <h1>Policy, Planning and Research (PPR)</h1>
                        </div>
                        <div>
                            <h1>ICT</h1>
                        </div>
                        <div>
                            <h1>Geosciences</h1>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

