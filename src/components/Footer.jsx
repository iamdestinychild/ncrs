import styles from "../../public/styling/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <section className={styles.section}>
          <h1>Subsidiaries</h1>
          <Link href="https://consultancy.ncrs.gov.ng/">Geosmart Digital Solutions</Link>
          <h1>Zonal Laboratories</h1>
          <ul>
            <li><Link href="/laboratories/corporative-Information-network">COPINE</Link></li>
            <li><Link href='/laboratories/avanced-space-technology-application-laboratory-uyo'>Uyo</Link></li>
            <li><Link href='/laboratories/zonal-advanced-space-technology-application-laboratory-kashere'>Kashere</Link></li>
            <li><Link href='/laboratories/zonal-advanced-space-technology-application-laboratory-kashere'>Kano</Link></li>
            <li><Link href='/laboratories/zonal-advanced-space-technology-application-laboratory-abakiliki'>Abakiliki</Link></li>
            <li><Link href='/laboratories/zonal-advanced-space-technology-application-laboratory-langtang'>Lantang</Link></li>
            
          </ul>
        </section>
        <section className={styles.section}>
          <h1>Quick Links</h1>
          <ul>
            <li>
              <Link href='/about'>About Us</Link></li>
            <li>
              <Link href='/services'>Services</Link></li>
            {/* <li><Link href='/'>Recent Programs</Link></li> */}
            <li><Link href='/news'>News</Link></li>
            <li> <Link href='/contact'>Contact Us</Link></li>
            <li><Link href='https://consultancy.ncrs.gov.ng/'>Consultancy</Link></li>
          </ul>
        </section>
        <section className={styles.section}>
          <h1>Support</h1>
          <ul>
            <li>Cookies Policy</li>
            <li>Privacy Policy</li>
            <li>ISMS Policy</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
            <li>NPKI CRL</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h1>NCRS HQ</h1>
          <p>Address: Corporate Office: Rizek Village along Fobor Road Jos East LGA </p>
          <p>
            Annex: Km 11, Jos-Bukuru Express Way, P.M.B 2136 Jos
          </p>

          <ul>
            <li>Phone: +234 8088714963</li>
            <li>Email: info@ncrs.gov.ng</li>
          </ul>
        </section>
      </div>
      <section className={styles.section_line_circle_container}>
          <div className={styles.footer_line}></div>
          <div className={styles.footer_circle}></div>
      </section>
      <section className={styles.section_copyright}>
        <p><span>National Centre Remote Sensing</span></p>
        <p>All Rights Reserved. Terms of Use and Privacy Policy</p>
      </section>
    </div>
  );
}
