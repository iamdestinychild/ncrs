import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { RightArrow } from '../../components/IconsPalette'
import WebDepartment from '../../components/webDepartment/webdepartment'


export default function Department(){
    return(
        <>
        <main className={styles.department}>
        <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>About NCRS</span></p>
                    {/* <p className={styles.heading_two}>Our Visions, Mission and Our Team</p> */}
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
            <section className={styles.department_section_one}>
                <h1>Department of Finance & Administrations</h1>
                <p>The department headed by a Deputy Director is subdivided into two sections, namely; General Administration and Finance Sections. The General Administration Section is further subdivided into units for efficient functioning. There are six Units headed by the Chief Administrative/Executive Officer who supervises the activities and staff in each of the units.</p>
                <Link className={styles.department_section_one_link} href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>

            <section className={styles.department_section_one}>
                <h1>Strategic Planning Department</h1>
                <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                <Link className={styles.department_section_one_link} href="/administration">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>

            <section className={styles.department_section_one}>
                <h1>Strategic Planning Department</h1>
                <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                <Link className={styles.department_section_one_link} href="/planning">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>

            <section className={styles.department_section_one}>
                <h1>Strategic Planning Department</h1>
                <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                <Link className={styles.department_section_one_link} href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>

            <section className={styles.department_section_one}>
                <h1>Strategic Planning Department</h1>
                <p>The department, headed by a Deputy Director is subdivided into four sections. These sections all come together in the establishment of a strategy for achieving organizational goals, as well as developing comprehensive plans to integrate and coordinate activities.</p>
                <Link className={styles.department_section_one_link} href="#">
                    <p>Learn More</p>
                    <RightArrow iconStyle={styles.department_section_one_link_icon}/>
                </Link>
            </section>
        </main>
        <WebDepartment/>
        </>
    )
}

