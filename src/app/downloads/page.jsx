"use client"
import styles from "./styles.module.css";
import { downloads } from "../../../data";
import Link from "next/link";
import { getAllDownloadables, downloadDownloadable } from "../../../api";
import { useEffect, useState } from "react";

export default function Download() {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    const fetchDownloads = async () => {
      const downloads = await getAllDownloadables();
      console.log(downloads);
      setDownloads(downloads.data);
    };
    fetchDownloads();
  }, []);

  const downloadCurrent = async (slug) => { 
    await downloadDownloadable(slug)
  }

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero_layer}></div>
        <div className={styles.hero_content}>
          <p className={styles.heading_one}>
            Home / <span>About NCRS</span>
          </p>
          <div className={styles.hero_title_page}>
            <div className={styles.title_cover}>
              <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
            </div>
            <div className={styles.page_cover}>
              <h1 className={styles.page}>Download materials</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_two}>
        <div className={styles.section_two_container}>
          <div className={styles.section_two_container_main}>
            <h1 className={styles.section_two_container_main_heading}>
              Policy Documents and Supplementary Materials
            </h1>
            <p className={styles.section_two_container_main_paragraph}>
              4 Documents Available for Download
            </p>
            <div className={styles.section_two_container_main_table}>
              <div className={styles.section_two_container_main_table_column}>
                <div className={styles.section_two_container_main_table_row}>
                  <p
                    className={
                      styles.section_two_container_main_table_row_heading
                    }
                  >
                    Date
                  </p>
                  <p
                    className={
                      styles.section_two_container_main_table_row_heading
                    }
                  >
                    Documents
                  </p>
                  <p
                    className={
                      styles.section_two_container_main_table_row_heading
                    }
                  >
                    Time
                  </p>
                </div>
              </div>
              {downloads ? (
                downloads.map((download, index) => (
                  <div
                    key={index}
                    className={styles.section_two_container_main_table_column}
                  >
                    
                    <div
                      className={
                        styles.section_two_container_main_table_column_line
                      }
                    ></div>
                    <div
                     onClick={()=> downloadCurrent(download.slug)}
                      className={styles.section_two_container_main_table_row}
                    >
                      <p
                        className={
                          styles.section_two_container_main_table_row_heading
                        }
                      >
                        {new Date(download.createdAt).toISOString().split("T")[0]}
                      </p>
                      <p
                        className={`${styles.section_two_container_main_table_row_heading} hover:text-secondary  text-blue-500`}
                      >
                        {download.slug}
                      </p>
                      <p
                        className={`${styles.section_two_container_main_table_row_heading} text-blue-500`}
                      >
                        {new Date(download.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
