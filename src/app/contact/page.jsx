import Image from "next/image";
import styles from "./styles.module.css"
import { Phone, Mail } from "../../components/IconsPalette";

export default function Contact(){
    return(
        <main>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>Contact</span></p>
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Contact  Us</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.section_two_container_form_map}>
                        <div className={styles.section_two_container_line}></div>
                        <h1 className={styles.section_two_container_heading}>Contact Us</h1>
                        <p className={styles.section_two_container_paragraph}>Got any questions about us and our projects and programs? We’re here to help and assist you</p>
                        <form className={styles.section_two_form}>
                            <div className={styles.section_two_form_cover}>
                            <label htmlFor="name" className={styles.section_two_form_label}>Full Name</label>
                            <input type="text" className={styles.section_two_form_input} id="name" />
                            <label htmlFor="email" className={styles.section_two_form_label}>Email</label>
                            <input type="email" className={styles.section_two_form_input} id="email"/>
                            <label htmlFor="subject" className={styles.section_two_form_label}>Subject</label>
                            <input type="text" className={styles.section_two_form_input} id="subject"/>
                            
                            <label htmlFor="message" className={styles.section_two_form_label}>Message</label>
                            <textarea className={`${styles.section_two_form_input} ${styles.message_field}`} id="message"></textarea>
                            </div>
                            
                            <input type="submit" className={styles.section_two_form_submit} placeholder="Submit"/>
                        </form>
                        <div className={styles.section_two_detail}>
                            <div className={styles.section_two_detail_container}>
                                    <div className={styles.section_two_detail_icon_text}>
                                        <Phone iconStyle={styles.section_two_detail_icon}/>
                                        <div className={styles.section_two_detail_text}>
                                            <p>Phone</p>
                                            <p>+2348088714963</p>
                                        </div>  
                                    </div>

                                    <div className={styles.section_two_detail_icon_text}>
                                        <Mail iconStyle={styles.section_two_detail_icon}/>
                                        <div className={styles.section_two_detail_text}>
                                            <p>E-MAIL</p>
                                            <p>info@ncrs.gov.ng</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.section_two_banner_cover}>
                        {/* <div style="width: 100%"> */}
                        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=V2X3+3X5,%20Lenge%20930106,%20Plateau+(National%20Centre%20for%20Remote%20Sensing)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
                    {/* </div> */}
                    </div>
                </div>
            </section>
        </main>
    )
}