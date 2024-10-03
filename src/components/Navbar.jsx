"use client"
import BarIcon from "../../public/icons/BarIcon"
import ChevronRight from "../../public/icons/ChevronRight"
import styles from "../../public/styling/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import DropDown from "./DropDown"
import SideBar from "./SideBar"
import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import Close from "../../public/icons/Close"
import { motion } from "framer-motion"
import { Arrow } from "./IconsPalette"

export default function Navbar() {
    const [openSideBar, setOpenSideBar] = useState(false)
    const {sideBarState} = useAppContext()
    return (
        <motion.nav className={styles.nav}>
            <div className={styles.nav_inner}>
                <Link href="/" className={styles.logo_container}>
                    <Image src="/images/logo.png" alt="National Center For Remote Sensing Logo" className={styles.logo} width={742} height={336} />
                </Link>
                <div className={styles.web_links_container}>
                    <Link href="/">Home</Link>
                    <div className={styles.dropdown}>
        <p className={`${styles.link_arrow} ${styles.web_link}`}>About <span className={styles.about_span}>NCRS</span> <Arrow iconStyle={styles.nav_arrow}/></p>
        <div className={styles.about_dropdown}>
          <Link href="/about" className={styles.about_dropdown_link}>About Us</Link>
          <Link href="/background" className={styles.about_dropdown_link}>Our Background</Link>
          <Link href="/mandate" className={styles.about_dropdown_link}>Our Mandate</Link>
          <Link href="/departments" className={styles.about_dropdown_link}>Departments</Link>
          <Link href="/management" className={styles.about_dropdown_link}>Management Team</Link>
          <Link href="/organogram" className={styles.about_dropdown_link}>Organogram</Link>
          <Link href="/laboratories" className={styles.about_dropdown_link}>Laboratories</Link>
        </div>
      </div>

        <div className={styles.dropdown}>
          <p className={`${styles.link_arrow} ${styles.web_link} group`}>Services <Arrow iconStyle={styles.nav_arrow}/></p>
          <div className={styles.about_dropdown}>
            <Link href="/services" className={styles.about_dropdown_link}>Our Services</Link>
            <Link href="/downloads" className={styles.about_dropdown_link}>Downloads</Link>
          </div>
        </div>

        <div className={styles.dropdown}>
          <p className={`${styles.link_arrow} ${styles.web_link}`}>Media<Arrow iconStyle={styles.nav_arrow}/></p>
          <div className={styles.about_dropdown}>
            <Link href="/news" className={styles.about_dropdown_link}>News</Link>
            <Link href="/gallery" className={styles.about_dropdown_link}>Gallery</Link>
          </div>
        </div>
                    <Link href="#">Consultancy</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
                {!sideBarState.sideBar ? 
                    <div onClick={() => sideBarState.slideSideBar(true)}><BarIcon customStyle={styles.bar_icon} /></div>
                    : <div onClick={() => sideBarState.slideSideBar(false)}><Close customStyle={styles.bar_icon} /></div>
                }
                    
            </div>
            <SideBar />
        </motion.nav>
    )
}