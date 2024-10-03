import Image from "next/image"
import styles from '/public/styling/laboratories.module.css'
export default function Laboratories() {
    return (
        <div className={styles.laboratories}>
            <h1 className={styles.heading}>Regional Laboratories</h1>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Corporative Information Network (COPINE)</h1>
                </div>
                <div className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Corporative Information Network (COPINE)</h1>
                </div>
                <div className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Corporative Information Network (COPINE)</h1>
                </div>
                <div className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Corporative Information Network (COPINE)</h1>
                </div>
                <div className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Corporative Information Network (COPINE)</h1>
                </div>                
                <div className={styles.card}>
                    <Image src="/images/card-1.jpg" alt="this" className={styles.card_image} fill />
                    <div className={styles.card_shade}></div>
                    <h1 className={styles.card_text}>Corporative Information Network (COPINE)</h1>
                </div>                

            </div>
        </div>
    )
}