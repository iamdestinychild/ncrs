import { useState } from "react"
import styles from '../../public/styling/card.module.css'
import ChevronRight from "../../public/icons/ChevronRight"
import Image from "next/image"

export default function Card({ card }){
    const [openCard, setOpenCard] = useState(false)

    const handleCard = (id) => {
        setOpenCard(!openCard)
        console.log(openCard)
    }
    return (
        <div className={styles.card}>
              <div className={styles.card_image_cover}>
                <Image
                  src={card.img}
                  alt="image"
                  className={styles.card_image}
                  fill
                />
              </div>
              <div className={styles.profile}>
                <h1>{card.name}</h1>
                <div onClick={() => handleCard(card.id)} className={styles.title_icon}>
                  <p>{card.title}</p>
                  <ChevronRight
                    customStyle={`${styles.icon} ${
                      openCard? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              <div
                className={`${styles.card_details} ${
                  openCard? styles.open : styles.closed
                }`}
              >
                <p>{card.details}</p>
              </div>
            </div>
    )
}