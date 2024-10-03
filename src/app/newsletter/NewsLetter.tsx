import { Instagram, LinkedIn, X } from '../../components/IconsPalette'
import styles from './styles.module.css'
import Link from 'next/link'

export default function NewsLetter(){
    return(
        <div className={styles.newsletter}>
            <div className={styles.container}>
                <h1 className={styles.newsletter_heading}>Subscribe to Our Newsletter</h1>
                <p className={styles.newsletter_paragraph}>Subscribe to our newsletter to get quick access to news, opportunities as they become available. Also you can connect with us on our social media pages</p>
                <form className={styles.newsletter_form}>
                    <div className={styles.newsletter_form_input_cover}>
                        <label htmlFor='input' className={styles.input_cover_label}>Your Email</label>
                        <input type="email" placeholder='Enter valid email' id='input' className={styles.form_input} />
                    </div>
                    <input type="submit" className={styles.form_button} value="Subscribe" />
                </form>
                <div className={styles.form_socials}>
                    <Link href="#" className={styles.form_social_icon_cover}><X iconStyle={styles.form_social_icon} /></Link>
                    <Link href="#" className={styles.form_social_icon_cover}><Instagram iconStyle={styles.form_social_icon} /></Link>
                    <Link href="#" className={styles.form_social_icon_cover}><LinkedIn iconStyle={styles.form_social_icon} /></Link>
                </div>
            </div>
        </div>
    )
}