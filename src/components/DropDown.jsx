"use client"
import React, { useState } from 'react'
import ChevronRight from '../../public/icons/ChevronRight'
import styles from '/public/styling/dropdown.module.css'

export default function DropDown({ children, text }) {
  const [drop, setDrop] = useState(true)

  const toggleDropDown = ()=>{
    setDrop(!drop)
  }
  return (
    <div className={styles.web_dropdown}>
        <div className={styles.web_dropdown_text} onClick={()=>toggleDropDown()}>
            <p>{text}</p>
            <ChevronRight customStyle={`${styles.icons} ${drop? 'rotate-0': 'rotate-90'}`}/>
        </div>
        <div className={`${styles.web_dropdown_links} ${drop? styles.collapsed:styles.expanded}`}>
            {children}
        </div>
    </div>
  )
}
