import styles from './styles.module.css'
import Image from 'next/image'

export default function Planning(){
    return(
        <main className={styles.main}>  
            <div className={styles.container}>
                <h1>Climate Change  Awareness Campaign</h1>
                <div className={styles.image_container}>
                    <Image src='/images/gallery_2.jpeg' alt='img' className={styles.image} fill/>
                </div>
                <div className={styles.title_small}>
                    <p>Jame Joe</p>
                    <p>04 october 2024</p>
                </div>
                <div className={styles.dash}></div>
                <article className={styles.article}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit eligendi nihil officia est amet quo corporis dolores voluptate nulla quos, cumque dicta at sequi, dolore natus, odio dolorem culpa?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus corrupti ducimus mollitia dolorum excepturi odit possimus laudantium nobis. Illo modi facere voluptas incidunt beatae doloribus molestiae quae rem quos dolorum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur suscipit assumenda, cum esse illo repudiandae delectus nam est, placeat eaque, numquam pariatur dignissimos! Beatae, esse! Tenetur eligendi modi assumenda rerum.</p>
                </article>
            </div>
        </main>
    )
}