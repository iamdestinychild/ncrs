import Image from "next/image"
import styles from '/public/styling/laboratories.module.css'
import Link from "next/link"
export default function Laboratories() {
    return (
        <div className={styles.laboratories}>
            <h1 className={styles.heading}>Regional Laboratories</h1>
            <div className={styles.card_container}>
                <Link href='/laboratories/corporative-Information-network' className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Corporative Information Network (COPINE)</h1>
                </Link>
                <Link href='/laboratories/' className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Advanced Space Technology Application Laboratory (ASTAL), 
                    Uyo</h1>
                </Link>
                <Link href="/laboratories/zonal-advanced-space-technology-application-laboratory-kashere" className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Zonal Advanced Space Technology Application Laboratory (ZASTAL) Kashere</h1>
                </Link>
                <Link href="/laboratories/zonal-advanced-space-technology-application-laboratory-kano" className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Zonal Advanced Space Technology Application Laboratory (ZASTAL) Kano</h1>
                </Link>
                <Link href='/laboratories/zonal-advanced-space-technology-application-laboratory-abakiliki' className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Zonal Advanced Space Technology Application Laboratory (ZASTAL) Abakiliki</h1>
                </Link>                
                <Link href='/laboratories/zonal-advanced-space-technology-application-laboratory-langtang' className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Zonal Advanced Space Technology Applications Laboratory  (ZASTAL) Langtang</h1>
                </Link>                

            </div>
        </div>
    )
}