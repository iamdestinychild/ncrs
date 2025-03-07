import BulletPoint from "../../public/icons/BulletPoint";
import styles from "../../public/styling/whatwedo.module.css";
import Link from "next/link";
export default function Whatwedo() {
  return (
    <div className={styles.whatwedo}>
      <div className={styles.whatwedo_inner}>
        <h1>What we do?</h1>
        <div className={styles.whatwedo_content_container}>
          <div className={styles.content}>
            <BulletPoint />
            <p>Satellite Data Services</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Natural Resource Mapping</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Forestry and Environment</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Cadastral Mapping</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Water Resources</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Urban and Rural Planning and Development</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p >Disaster Management</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p >Ecological & Climate Studies</p>
          </div>
        </div>
        <div className={styles.learn_more_container}>
        <Link className={styles.learnMore} href="/services">
          Learn More
        </Link>
        </div>
      </div>
    </div>
  );
}
