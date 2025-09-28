"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getResumeInfo, ResumeInfo } from "./api/api";

const Home = () => {
  const [resume, setResume] = useState<ResumeInfo | null>(null);

  useEffect(() => {
    getResumeInfo()
      .then(data => {
        if (data) setResume(data);
      })
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div>
          <p><strong className={styles.resumeItem}>이름: </strong>{resume?.name}</p>
          <p><strong className={styles.resumeItem}>인삿말: </strong>{resume?.description}</p>
        </div>

      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

export default Home;