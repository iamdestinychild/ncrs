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
            <Link href=''>Satellite Data Services</Link>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <Link href=''>Natural Resource Mapping</Link>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <Link href=''>Forestry and Environment</Link>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <Link href=''>Cadastral Mapping</Link>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <Link href=''>Water Resources</Link>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <Link href=''>Urban and Rural Planning and Development</Link>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <Link href=''>Disaster Management</Link>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <Link href=''>Ecological & Climate Studies</Link>
          </div>
        </div>
        <div className={styles.learn_more_container}>
        <Link className={styles.learnMore} href="/about">
          Learn More
        </Link>
        </div>
      </div>
    </div>
  );
}
