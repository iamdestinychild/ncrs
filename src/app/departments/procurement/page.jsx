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
          <h1>Procurement</h1>
          <div className={styles.content}>
            
            <p>The Procurement Department of the Centre is responsible for overseeing all processes involved in acquiring goods, services, and works to ensure efficient business operations and value for money. It consists of units focused on procurement records, price intelligence, and procurement planning. Key functions include sourcing suppliers, negotiating terms, managing contracts, fostering supplier relationships, mitigating supply chain risks, ensuring quality, controlling costs, and processing payments. The department&apos;s objectives are to reduce costs, improve quality, strengthen vendor relationships, manage risks, and promote innovation and sustainability.</p>
            <div className={styles.banner_cover}>
              <Image
                src="/images/img-22.jpg"
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
                <h1>Bitrus Pam Pwajok</h1>
                <p>Head of department</p>
              </div>
            </div>
            <div className={styles.unit_cover}>
              <h1>UNITS</h1>
              <div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Procurement Record and Documentation</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Price Intelligence and Monitoring</p>
                </div>
                <div className={styles.button_text}>
                  <RadioIcon customStyle={styles.icon} />
                  <p>Procurement Planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
