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
          <h1>GROUND RECEIVING STATION</h1>
          <div className={styles.content}>
            
            <p>
            The Ground Receiving Station is saddled with the responsibility of tracking various satellites for the purpose of obtaining data for various areas of applications. This department is also charged with the mandate to archive satellite data as well as other scientific data for research; all scientific/technical project findings and publications are equally housed here. Pre-Processing, Processing and value addition processes of raw satellite data are carried out.</p>
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
                  <p>Satellite Data Management</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Ground Receiving Station Operations</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>System Engineering.</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>ICT/Artificial Intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
