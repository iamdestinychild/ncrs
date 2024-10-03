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
                <h1>WATER RESOURCES AND CLIMATE</h1>
                <div className={styles.content}>
                <div className={styles.banner_cover}>
                        <Image src='/images/img-20.jpg' alt='image' className={styles.banner} fill/>
                    </div>
                    <p>The earth is the only planet that appears blue in color, also nicknamed the blue planet because 95%of it is covered by water. The department is so named because the interaction of water and climate has its complexity on the earth. Water sometimes brings destruction and sometimes where needed is scarce. Global warming has also affected weather of different parts of the earth. Research into the phenomenon of both interactions is invaluable to human existence.</p>
                    
                </div>
            </section>
        </main>
    )
}

