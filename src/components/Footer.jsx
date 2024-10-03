import styles from "../../public/styling/footer.module.css";

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
            <li>About Us</li>
            <li>Services</li>
            <li>Recent Programs</li>
            <li>News</li>
            <li>Contact Us</li>
            <li>Consultancy</li>
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
          <p>Address: Corporate Office: Rizek Village along Fobor Road</p>
          <p>
            Jos East LGA Annex: Km 11, Jos-Bukuru Express Way, P.M.B 2136 Jos
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
