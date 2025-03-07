import styles from './styles.module.css'

export default function Administration(){
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
                                <h1 className={styles.page}>Department of Finance & Administration</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hero_container_describe}>
                        <p className={styles.hero_container_describe_paragraph}>Units Under Administration Department</p>
                        <div className={styles.hero_container_cards}>
                            <p>General Administration Unit</p>
                            <p>Maintenance & Transportation Unit</p>
                            <p>Establishment, Staff Training & Welfare</p>
                            <p>REGISTRY, records & stores Units</p>
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
                <div className={styles.section_three_layer}></div>
                <div className={styles.section_three_container}>
                    <p className={styles.section_three_container_paragraph}>Units Under Finance Department</p>
                    <div className={styles.section_three_mobile_cards}>
                        <div>
                            <p>FINAL ACCOUNT & Reconciliation</p>
                            <p>Advances & retirement</p>
                            <p>CENTRAL PAY UNIT</p>
                            <p>SALARY SECTIONS/PERSONNEL</p>
                            <p>checking section unit</p>
                            <p>OVERHEADS & CAPITAL unit</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.section_three_web_cards}>
                        <div className={styles.section_three_web_card_first}>
                            <p>FINAL ACCOUNT & Reconciliation</p>
                            <p>CENTRAL PAY UNIT</p>
                            <p>SALARY SECTIONS/PERSONNEL</p>
                            <p>OVERHEADS & CAPITAL unit</p>
                        </div>
                        <div className={styles.section_three_web_card_second}>
                            <p></p>
                            <p>Advances & retirement</p>
                            <p>checking section unit</p>
                            <p></p>
                        </div>
                    </div>
                </div>  
            </section>
            <section className={styles.section_four}>
                <div className={styles.section_four_cards}>
                    <div className={styles.section_four_card}>
                        <h1>Salary Sections /personnel</h1>
                        <p>Prepare and pay salary to all staff with the support of IPPIS office. They also keep staff salary matters such as pension, tax, NHF etc.</p>
                    </div>
                    <div className={styles.section_four_card}>
                        <h1>Central Pay unit</h1>
                        <p>This unit makes payment and also keep and maintain cash books and also perform other functions.</p>
                    </div>
                    <div className={styles.section_four_card}>
                        <h1>General Administration Unit</h1>
                        <p>This unit handles matters related to; Appointment, Promotion, Discipline and Security matters.</p>
                    </div>
                    <div className={styles.section_four_card}>
                        <h1>overhead & Capital unit</h1>
                        <p>This section is in charge of preparation of  overhead and capital vouchers.</p>
                    </div>
                    <div className={styles.section_four_card}>
                        <h1>Advances & retirement Unit</h1>
                        <p>This section is in charge of ensuring all staff advances are retired promptly.</p>
                    </div>
                    <div className={styles.section_four_card}>
                        <h1>checking section unit</h1>
                        <p>This section is in charge of checking of all payment vouchers to ensure that all supporting documents are included and  are inserted into the payment vouchers.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}