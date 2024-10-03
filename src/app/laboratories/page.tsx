import { ListTag } from "../../components/IconsPalette"
import Link from "next/link"
import styles from "./styles.module.css"

export default function Labs(){
    return(
        <main>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>Labs</span></p>
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Labs</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                <div className={styles.section_two_line}></div>
                <h1 className={styles.section_two_heading}>Our Labs</h1>
                <div className={styles.section_two_cards}>
                    <Link href="/laboratories/zonal-advanced-space-technology-application-laboratory-abakiliki" className={styles.section_two_card}>
                        <div className={styles.section_two_card_icon_cover}>
                            <ListTag iconStyle={styles.section_two_card_icon}/>
                        </div>
                        <p>Zonal Advanced Space Technology Application Laboratory (ZASTAL) Abakiliki</p>
                    </Link>
                    <Link href="/laboratories/zonal-advanced-space-technology-application-laboratory-langtang" className={styles.section_two_card}>
                        <div className={styles.section_two_card_icon_cover}>
                            <ListTag iconStyle={styles.section_two_card_icon}/>
                        </div>
                        <p>Zonal Advanced Space Technology Applications Laboratory  (ZASTAL) Langtang</p>
                    </Link>
                    <Link href="/laboratories/zonal-advanced-space-technology-application-laboratory-kashere" className={styles.section_two_card}>
                        <div className={styles.section_two_card_icon_cover}>
                            <ListTag iconStyle={styles.section_two_card_icon}/>
                        </div>
                        <p>Zonal Advanced Space Technology Application Laboratory (ZASTAL) Kashere</p>
                    </Link>
                    <Link href="/laboratories/avanced-space-technology-application-laboratory-uyo" className={styles.section_two_card}>
                        <div className={styles.section_two_card_icon_cover}>
                            <ListTag iconStyle={styles.section_two_card_icon}/>
                        </div>
                        <p>Advanced Space Technology Application Laboratory</p>
                    </Link>
                    <Link href="/laboratories/zonal-advanced-space-technology-application-laboratory-kano" className={styles.section_two_card}>
                        <div className={styles.section_two_card_icon_cover}>
                            <ListTag iconStyle={styles.section_two_card_icon}/>
                        </div>
                        <p>Zonal Advanced Space Technology Application Laboratory (ZASTAL) Kano</p>
                    </Link>
                    <Link href="/laboratories/corporative-Information-network" className={styles.section_two_card}>
                        <div className={styles.section_two_card_icon_cover}>
                            <ListTag iconStyle={styles.section_two_card_icon}/>
                        </div>
                        <p>Corporative Information Network (COPINE)</p>
                    </Link>
                </div>
                </div>
            </section>
        </main>
    )
}