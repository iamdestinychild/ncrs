import styles from './styles.module.css'
import { RightArrow } from '../IconsPalette'
import Image from 'next/image'
import Link from 'next/link'

export default function WebDepartment(){
    return(
        <main className={styles.web_department}>
            <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>About NCRS</span></p>
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>Our divisions and functions</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Departments</h1>
                        </div>
                    </div>
                </div>
            </section>
           <section className={styles.web_department_section_two}>
                <div className={styles.web_department_section_two_container}>
                    <div className={styles.web_department_section_two_contents}>
                        <div className={styles.web_department_section_two_contents_one}>
                            <h1>Department of Finance & Administration</h1>
                            <p>The department headed by a Deputy Director is subdivided into two sections, namely; General Administration and Finance Sections. The General Administration Section is further subdivided into units for efficient functioning. There are six Units headed by the Chief Administrative/Executive Officer who supervises the activities and staff in each of the units.</p>
                            <Link className={styles.web_department_section_two_link} href="/administration">
                                <p>Learn More</p>
                                <RightArrow iconStyle={styles.web_department_section_two_link_icon}/>
                            </Link>
                        </div>
                        <div className={styles.web_department_section_two_contents_banner_cover}>
                            <Image src="/img/img-07.jpeg" alt="image" className={styles.web_department_section_two_contents_banner} fill/>
                        </div>
                    </div>
                </div>
           </section>

           <section className={styles.web_department_section_three}>
            <div className={styles.web_department_section_two_container}>
                <div className={styles.web_department_section_three_contents}>
                    <div className={styles.web_department_section_three_contents_one}>
                        <h1>Strategic Planning Department</h1>
                        <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                        <Link className={styles.web_department_section_two_link} href="/planning">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_three_link_icon}/>
                        </Link>
                    </div>
                    <div className={styles.web_department_section_three_contents_banner_cover}>
                        <Image src="/img/img-08.jpg" alt="image" className={styles.web_department_section_three_contents_banner} fill/>
                    </div>
                </div>
            </div>
           </section>

           <section className={styles.web_department_section_four}>
           <div className={styles.web_department_section_two_container}>
                <div className={styles.web_department_section_four_contents}>
                    <div className={styles.web_department_section_four_contents_one}>
                        <h1>Land Information Department</h1>
                            <ul className={styles.web_department_section_four_list}>
                                <li>Mapping</li>
                                <li>Urban & Rural Development</li>
                                <li>Agriculture</li>
                            </ul>
                        <Link className={styles.web_department_section_two_link} href="#">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_two_link_icon}/>
                        </Link>
                    </div>
                    <div className={styles.web_department_section_four_contents_banner_cover}>
                        <Image src="/img/img-08.jpg" alt="image" className={styles.web_department_section_four_contents_banner} fill/>
                    </div>
                </div>
           </div>
           </section>

           <section className={styles.web_department_section_five}>
           <div className={styles.web_department_section_two_container}>
                <div className={styles.web_department_section_five_contents}>
                    <div className={styles.web_department_section_five_contents_one}>
                        <h1>Geosciences & Water Resources Department</h1>
                        <p>The Department applies GIS and Remote Sensing Technology to research in the following areas:</p>
                            <ul className={styles.web_department_section_five_list}>
                                <li>Mineral Exploration</li>
                                <li>Hydrology</li>
                                <li>Erosion Management & Control</li>
                            </ul>
                        <Link className={styles.web_department_section_two_link} href="#">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_two_link_icon}/>
                        </Link>
                    </div>
                    <div className={styles.web_department_section_two_contents_banner_cover}>
                        <Image src="/img/img-09.jpg" alt="image" className={styles.web_department_section_two_contents_banner} fill/>
                    </div>
                </div>
            </div>
           </section>

           <section className={styles.web_department_section_four}>
           <div className={styles.web_department_section_two_container}>
                <div className={styles.web_department_section_four_contents}>
                    <div className={styles.web_department_section_four_contents_one}>
                        <h1>Disaster Management Department</h1>
                            <ul className={styles.web_department_section_four_list}>
                                <li>Disaster Risk Management</li>
                                <li>Waste Management</li>
                                <li>Geo-Intelligence</li>
                            </ul>
                        <Link className={styles.web_department_section_two_link} href="#">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_two_link_icon}/>
                        </Link>
                    </div>
                    <div className={styles.web_department_section_two_contents_banner_cover}>
                        <Image src="/img/img-10.jpg" alt="image" className={styles.web_department_section_two_contents_banner} fill/>
                    </div>
                </div>
            </div>
           </section>

           <section className={styles.web_department_section_five}>
           <div className={styles.web_department_section_two_container}>
                <div className={styles.web_department_section_five_contents}>
                    <div className={styles.web_department_section_five_contents_one}>
                        <h1>Data Management Department</h1>
                            <ul className={styles.web_department_section_five_list}>
                                <li>Satellite Data Archiving/Cataloguing/ICT  </li>
                                <li>System Engineering</li>
                                <li>Software Development</li>
                            </ul>
                        <Link className={styles.web_department_section_two_link} href="#">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_two_link_icon}/>
                        </Link>
                    </div>
                    <div className={styles.web_department_section_two_contents_banner_cover}>
                        <Image src="/img/img-11.jpg" alt="image" className={styles.web_department_section_two_contents_banner} fill/>
                    </div>
                </div>
            </div>
           </section>

           <section className={styles.web_department_section_four}>
           <div className={styles.web_department_section_two_container}>
                <div className={styles.web_department_section_four_contents}>
                    <div className={styles.web_department_section_four_contents_one}>
                        <h1>Environment Department</h1>
                            <ul className={styles.web_department_section_four_list}>
                                <li>Ecology</li>
                                <li>Forestry Climate</li>
                                <li>Studies</li>
                            </ul>
                        <Link className={styles.web_department_section_two_link} href="#">
                            <p>Learn More</p>
                            <RightArrow iconStyle={styles.web_department_section_two_link_icon}/>
                        </Link>
                    </div>
                    <div className={styles.web_department_section_two_contents_banner_cover}>
                        <Image src="/img/img-12.jpg" alt="image" className={styles.web_department_section_two_contents_banner} fill/>
                    </div>
                </div>
            </div>
           </section>
        </main>
    )
}