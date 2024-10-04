"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import ChevronRight from "../../../public/icons/ChevronRight";
import { cards, card } from "../../../data";
import Card from '../../components/Card'

export default function Management() {

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero_layer}></div>
        <div className={styles.hero_content}>
          <p className={styles.heading_one}>
            Home / <span>About NCRS</span>
          </p>
          {/* <p className={styles.heading_two}>Our Visions, Mission and Our Team</p> */}
          <div className={styles.hero_title_page}>
            <div className={styles.title_cover}>
              <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
            </div>
            <div className={styles.page_cover}>
              <h1 className={styles.page}>Management Team</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_two}>
      <div className={styles.section_two_content_line}></div>
        <h1>Management TEAM</h1>
        {/* <div className={styles.section_two_card_one}>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/person-1.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Dashan Titus Dalohom</h1>
                            <p>Managing Director</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                </div>
                <div className={styles.section_two_card_two}>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/director.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Omolere O. Sesan</h1>
                            <p>H.O.D. POLICY PLANNING AND RESEARCH</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/person-2.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Umar Suleiman</h1>
                            <p>Assistant chief scientific officer</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/person-3.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Tallen Abubakar Sadiq</h1>
                            <p>Head of Department</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/person-4.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Bitrus Pam Pwajok</h1>
                            <p>Assistant Director</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/person-5.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Joshua J. Iliya, PhD</h1>
                            <p>Deputy Director</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/person-6.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Dr Abbas Bolaji Adigun</h1>
                            <p>HOD of ICT Department</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/person-7.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Mr. Yehoshua G Nyamdang</h1>
                            <p>Managing Director</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_image_cover}>
                            <Image src='/images/person-8.jpg' alt='image' className={styles.card_image} fill />
                        </div>
                        <div className={styles.text_button}>
                            <h1>Umar Suleiman</h1>
                            <p>Chief Scientific Officer</p>
                            <button>View Profile</button>
                        </div>
                    </div>
                </div> */}
        <div className={styles.section_two_card_one}>
            <Card card={card} />
        </div>

        <div className={styles.section_two_card_two}>
          {cards.map((card, index) => (
              <Card card={card} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
