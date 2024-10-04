"useClient";
import Link from "next/link";
import DropDown from "./DropDown";
import styles from "../../public/styling/sidebar.module.css";
import { useAppContext } from "../context/AppContext";
import { useEffect, useRef } from "react";

export default function SideBar() {
  const { sideBarState } = useAppContext();
  const sideBarRef = useRef();

  const checkOutFocus = (e) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      sideBarState.slideSideBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkOutFocus);
    return () => document.removeEventListener("mousedown", checkOutFocus);
  });

  return (
    <div
      ref={sideBarRef}
      className={`${styles.sidebar} ${
        sideBarState.sideBar ? styles.slide_sidebar : ``
      }`}
    >
      <ul className={styles.sidebar_inner}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <DropDown text="About NCRS">
          <ul>
            <li>
              <Link href="/about" className={styles.sidebar_dropdown_link}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/background" className={styles.sidebar_dropdown_link}>
                Our Background
              </Link>
            </li>
            <li>
              <Link
                href="/departments"
                className={styles.sidebar_dropdown_link}
              >
                Department
              </Link>
            </li>
            <Link href="/mandate" className={styles.about_dropdown_link}>
              Our Mandate
            </Link>
            <li>
              <Link href="management" className={styles.sidebar_dropdown_link}>
                Managemnet Team
              </Link>
            </li>
            <li>
              <Link href="/organogram" className={styles.sidebar_dropdown_link}>
                Organogram
              </Link>
            </li>
            <li>
              <Link href="/labs" className={styles.sidebar_dropdown_link}>
                Laboratories
              </Link>
            </li>
          </ul>
        </DropDown>
        <DropDown text="Services">
          <ul>
            <li>
              <Link href="/services" className={styles.sidebar_dropdown_link}>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="downloads" className={styles.sidebar_dropdown_link}>
                Downloads
              </Link>
            </li>
          </ul>
        </DropDown>
        <DropDown text="Media">
          <ul>
            <li>
              <Link href="/news" className={styles.sidebar_dropdown_link}>
                News
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={styles.sidebar_dropdown_link}>
                Gallery
              </Link>
            </li>
          </ul>
        </DropDown>
        <li>
          <Link href="/consultancy" className={styles.sidebar_dropdown_link}>
            Consultancy
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.sidebar_dropdown_link}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
