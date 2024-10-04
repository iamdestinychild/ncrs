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
              <p className={styles.title}>Our divisions and functions</p>
            </div>
            <div className={styles.page_cover}>
              <h1 className={styles.page}>Departments</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_two}>
        <div className={styles.section_two_inner}>
          <h1>Geosciences</h1>
          <div className={styles.content}>
            <p>
              The Department of Geosciences at the National Centre for Remote
              Sensing (NCRS) is significantly advancing the understanding and
              application of remote sensing technologies in Earth sciences.
              Through satellite data, the department focuses on identifying
              hazards, locating mineral resources, and studying landforms. Key
              achievements include groundbreaking research in natural resource
              management, such as geohazard and structural mapping, mineral
              exploration, and environmental geology. The department has
              published high-impact papers and developed innovative
              methodologies for image processing and spatial analysis.
              Collaborative efforts with international institutions have
              furthered their contribution to climate change, disaster
              management, and sustainable development projects. Ongoing
              initiatives include studies on abandoned mine pits, geohazards,
              and harmful elements in drinking water sources. The department
              remains committed to scientific excellence, technological
              innovation, and addressing contemporary environmental challenges.{" "}
            </p>
            <div className={styles.banner_cover}>
              <Image
                src="/images/img-21.jpg"
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
                <h1>Yehoshua gwongtok nyamdang</h1>
                <p>Head of department</p>
              </div>
            </div>
            <div className={styles.unit_cover}>
              <h1>UNITS</h1>
              <div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Mineral Exploration</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Geophysics</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Hydrogeology</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Environmental Geology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
