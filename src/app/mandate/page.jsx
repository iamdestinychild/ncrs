import styles from "./styles.module.css"
import Image from "next/image"
import RadioIcon from "../../../public/icons/RadioIcon"

export default function Mandate(){
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>About NCRS</span></p>
                    {/* <p className={styles.heading_two}>Our Visions, Mission and Our Team</p> */}
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Our Mandate</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                <div className={styles.section_two_content_line}></div>
                    <h1>Our Mandate</h1>
                    <p>The National Centre for Remote Sensing is charged with the following mandates:</p>
                    <div className={styles.contents}>
                        <div className={styles.content}>
                            <RadioIcon  customStyle={styles.icon}/>
                            <p>To undertake pure and applied research, development and to operate Ground Receiving Station capable of receiving data from various satellite systems.</p>
                        </div>
                        <div className={styles.content}>
                            <RadioIcon  customStyle={styles.icon}/>
                            <p>Conduct training programmes for the benefit of resource planners, managers, decision-makers, researchers and the general public.</p>
                        </div>
                        <div className={styles.content}>
                            <RadioIcon  customStyle={styles.icon}/>
                            <p>To undertake action-oriented research and development with the application of RS/GIS technologies.</p>
                        </div>
                        <div className={styles.content}>
                            <RadioIcon  customStyle={styles.icon}/>
                            <p>To promote and sponsor local development of inventory of natural resources (e.g. solid minerals, petroleum, forestry etc.) and provide data for environmental monitoring and management.</p>
                        </div>
                        <div className={styles.content}>
                            <RadioIcon  customStyle={styles.icon}/>
                            <p>To undertake promotional activities such as Conferences, seminars, Workshops, production of Newsletters etc on the practical applications of Remote Sensing.</p>
                        </div>
                        <div className={styles.content}>
                            <RadioIcon  customStyle={styles.icon}/>
                            <p>To encourage and assist public/private sector users to establish in-house Remote Sensing and GIS outfits, and render Consultancy and Extension Services to such outfits and other organizations.</p>
                        </div>
                        <div className={styles.content}>
                            <RadioIcon  customStyle={styles.icon}/>
                            <p>To develop joint programmes with any public or private organization whose objectives are in line with national interests for economic development, especially in the field of Remote Sensing, GIS and GPS technologies.</p>
                        </div>
                        <div className={styles.content}>
                            <RadioIcon  customStyle={styles.icon}/>
                            <p>To generate income through services and sale of products developed by the NCRS</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}