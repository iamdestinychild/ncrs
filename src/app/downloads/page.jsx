import styles from './styles.module.css'
import {downloads} from '../../../data'

export default function Download(){
    return(
        <main>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>About NCRS</span></p>
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Download materials</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_container_main}>
                        <h1 className={styles.section_two_container_main_heading}>Detailed Annual Report & Brochure</h1>
                        <p className={styles.section_two_container_main_paragraph}>4 Documents Available for Download</p>
                        <div className={styles.section_two_container_main_table}>
                            <div className={styles.section_two_container_main_table_column}>
                                <div className={styles.section_two_container_main_table_row}>
                                    <p className={styles.section_two_container_main_table_row_heading}>Date</p>
                                    <p className={styles.section_two_container_main_table_row_heading}>Documents</p>
                                    <p className={styles.section_two_container_main_table_row_heading}>Time</p>
                                </div>
                            </div>
                            {
                                Array.isArray(downloads) ? 
                                downloads.map((download, index)=>(
                                    <div key={index} className={styles.section_two_container_main_table_column}>
                                        <div className={styles.section_two_container_main_table_column_line}></div>
                                        <div className={styles.section_two_container_main_table_row}>
                                            <p className={styles.section_two_container_main_table_row_heading}>{download.date}</p>
                                            <p className={styles.section_two_container_main_table_row_heading}>{download.documents}</p>
                                            <p className={styles.section_two_container_main_table_row_heading}>{download.time}</p>
                                        </div>
                                    </div>
                                )): <div></div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}