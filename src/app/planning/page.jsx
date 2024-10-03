import styles from './styles.module.css'

export default function Planning(){
    return(
        <main>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_container}>
                    <div className={styles.hero_content}>
                        <div className={styles.hero_title_page}>
                            <div className={styles.title_cover}>
                                <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                            </div>
                            <div className={styles.page_cover}>
                                <h1 className={styles.page}>Department of strategic planning unit</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hero_container_describe}>
                        <p className={styles.hero_container_describe_paragraph}>Units Under Administration Department</p>
                        <div className={styles.hero_container_cards}>
                            <p>BUGDET UNIT</p>
                            <p>LIBRARY RESOURCES AND DOCUMENTATION UNIT</p>
                            <p>PROJECTS PLANNING & MONITORING UNIT</p>
                            <p>INFORMATION SERVICES UNIT</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                <div className={styles.section_two_cards}>
                    <div className={styles.section_two_card}>
                        <h1>Establishment, Staff Training & Welfare</h1>
                        <p>This takes care of staff pension matters and gratuity, National Health Insurance Scheme (NHIS) matter, Staff Training and Welfare, Corps members and IT students.</p>
                    </div>
                    <div className={styles.section_two_card}>
                        <h1>Maintenance & Transportation Unit</h1>
                        <p>This Unit handles Office Assets and its maintenance, General cleanliness of premises, etc.</p>
                    </div>
                    <div className={styles.section_two_card}>
                        <h1>General Administration Unit</h1>
                        <p>This unit handles matters related to; Appointment, Promotion, Discipline and Security matters.</p>
                    </div>
                </div>
                </div>
            </section>
            <section className={styles.section_three}>
                <div className={styles.section_three_container}>
                    <h1 className={styles.section_three_container_heading}>Information Services Unit</h1>
                    <p className={styles.section_three_container_paragraph}><span>T</span>he preparation of the Centre’s annual report is performed by this unit.</p>
                </div>
            </section>
        </main>
    )
}