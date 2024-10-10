import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { RightArrow } from "../../components/IconsPalette";
import WebDepartment from "../../components/webDepartment/webdepartment";
import Water from "../../../public/icons/Water";
import Geoscience from "../../../public/icons/GeoScience";
import Plan from "../../../public/icons/Plan";
import Procurement from "../../../public/icons/Procurment";
import Ict from "../../../public/icons/Ict";
import Station from "../../../public/icons/Station";

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
          <h1>Departments</h1>
          <div className={styles.cards}>
            <Link
              href="/departments/water-resources-climate"
              className={styles.card}
            >
              <Water customStyle={styles.icon} />
              <h1>Water resources & Climate</h1>
            </Link>
            <Link
              href="/departments/ground-receiving-station"
              className={styles.card}
            >
              <Station customStyle={styles.icon} />
              <h1>Ground Receiving Station</h1>
            </Link>
            <Link href="/departments/procurement" className={styles.card}>
              <Procurement customStyle={styles.icon} />
              <h1>Procurement</h1>
            </Link>
            <Link
              href="/departments/policy-planning-research"
              className={styles.card}
            >
              <Plan customStyle={styles.icon} />
              <h1>Policy, Planning and Research</h1>
            </Link>
            <Link href="/departments/ict" className={styles.card}>
              <Ict customStyle={styles.icon} />
              <h1>ICT</h1>
            </Link>
            <Link href="/departments/geosciences" className={styles.card}>
              <Geoscience customStyle={styles.icon} />
              <h1>Geosciences</h1>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
