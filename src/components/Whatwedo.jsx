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
            <p>Satellite Data Services</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Satellite Data Services</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Satellite Data Services</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Satellite Data Services</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Satellite Data Services</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Satellite Data Services</p>
          </div>
          <div className={styles.content}>
            <BulletPoint />
            <p>Satellite Data Services</p>
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
