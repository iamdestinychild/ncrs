import styles from '/public/styling/greeting.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Greeting() {
    return (
        <div className={styles.greeting}>
            <div className={styles.greeting_inner}>
                <div className={styles.img_cover}>
                    <Image src='/images/director_0.png' alt="National Center For Remote Sensing" className={styles.img} fill/>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.content_heading}>From the Desk of the Director/CE</h1>
                    <article className={styles.content_article}>
                        <p>The National Centre for Remote sensing Jos (NCRS), is an activity Centre under the auspices of the National Space Research and development agency (NASRDA), Federal ministry of innovation, Science and Technology.</p>
                        <p>Established in 1995, the Centre is a key component of Nigeria&apos;s scientific and technological landscape, playing an essential role in the nation&apos;s space research and development efforts. It focuses on leveraging advanced remote sensing technologies to drive innovation, enhance scientific research, and support sustainable development across various sectors.</p>
                        <p>Since its inception, the Centre has contributed significantly to the advancement of space science, environmental monitoring, natural resource management, and disaster management.</p>
                        <p>By collaborating with local and international stakeholders, the Centre aims to strengthen the scientific community, promote capacity building, and apply remote sensing and related technologies to address contemporary challenges and opportunities</p>
                    </article>
                    <div className={styles.content_title}>
                        <h1>Dr. David Nyomo Jeb</h1>
                        <h1>Director/CE</h1>
                    </div>
                    <Link href="/about" className={styles.learn_more}>Learn More</Link>
                </div>
            </div>
        </div>
    )
}