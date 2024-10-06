import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { RightArrow } from "../../../components/IconsPalette";
import RadioIcon from "../../../../public/icons/RadioIcon";

export default function Department() {
  return (
    <main className={styles.department}>
      <section className={styles.hero}>
        <div className={styles.hero_layer}></div>
        <div className={styles.hero_content}>
          <p className={styles.heading_one}>
            Home / <span>About NCRS</span>
          </p>
          {/* <p className={styles.heading_two}>Our Visions, Mission and Our Team</p> */}
          <div className={styles.hero_title_page}>
            <div className={styles.title_cover}>
              <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
            </div>
            <div className={styles.page_cover}>
              <h1 className={styles.page}>Departments</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_two}>
        <div className={styles.section_two_inner}>
        <div className={styles.section_two_content_line}></div>
          <h1>Ict</h1>
          <div className={styles.content}>
            <article>
              <p>The Information and Communications Technology (ICT) Department at the National Centre for Remote Sensing (NCRS) serves as the technological backbone of the Centre, crucial in advancing its mission through technology and data-driven solutions.</p>
              <p>The department focuses on maintaining and optimizing IT infrastructure, ensuring reliable communication channels for staff and researchers, and developing custom software applications tailored to the Centre&apos;s needs.
              It also implements geospatial tools, data processing pipelines, and remote sensing algorithms, utilizing various platforms for insightful data visualizations. Additionally, the ICT Department develops AI-driven solutions to enhance data analysis, collaborates with researchers on remote sensing applications, and conducts regular training sessions to boost ICT skills within the Centre.</p>
            </article>
            <div className={styles.banner_cover}>
              <Image
                src="/images/img-24.jpg"
                alt="image"
                className={styles.banner}
                fill
              />
            </div>
          </div>
          <div className={styles.card_unit}>
            <div className={styles.card}>
              <div className={styles.card_image_cover}>
                <Image
                  src="/images/director-2.png"
                  alt="image"
                  className={styles.card_image}
                  fill
                />
              </div>
              <div className={styles.card_details}>
                <h1>Dr. Abbas Bolaji Adigun</h1>
                <p>Head of department</p>
              </div>
            </div>
            <div className={styles.unit_cover}>
              <h1>UNITS</h1>
              <div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Software and Analytics unit</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Infrastructure and Operations unit</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>IT Training and Capacity Building unit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
