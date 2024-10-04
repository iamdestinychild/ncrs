import styles from "../../public/styling/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <section className={styles.section}>
          <h1>Subsidiaries</h1>
          <p>consultancy.ncrs.gov.ng</p>
          <h1>Zonal Laboratories</h1>
          <ul>
            <li>COPINE</li>
            <li>Uyo</li>
            <li>Kashere</li>
            <li>Kano</li>
            <li>Abakiliki</li>
            <li>Lantang</li>
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
            <li><Link href='https://geosmartdigital.netlify.app/'>Consultancy</Link></li>
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
            <li>Phone 1: +234 706 291 6261</li>
            <li>Phone 2: +234 810 459 7908</li>
            <li>Email: info@ncrs.gov.ng</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
