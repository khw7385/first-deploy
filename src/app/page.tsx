"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getPortPolioInfo, getResumeInfo, PortFolioInfo, ResumeInfo } from "./api/api";

const Home = () => {
  const [resume, setResume] = useState<ResumeInfo | null>(null);
  const [portfolio, setPortfolio] = useState<PortFolioInfo | null>(null);

  useEffect(() => {
    getResumeInfo()
      .then(data => {
        if (data) setResume(data);
      });
    getPortPolioInfo()
      .then(data => {
        if(data) setPortfolio(data)
      });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div>
          <h2>소개</h2>
          <p><strong className={styles.resumeItem}>이름: </strong>{resume?.name}</p>
          <p><strong className={styles.resumeItem}>인삿말: </strong>{resume?.description}</p>
        </div>

        <div>
          <h2>기술 스택</h2>
          <div className={styles.techStack}>
            {portfolio?.techStack.map((url, idx) => {
              return <img key={idx} src={url} />
            })}
          </div>
        </div>

        <div>
          <h2>프로젝트</h2>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>이름</th>
                <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>URL</th>
              </tr>
            </thead>
            <tbody>
              {portfolio?.projects.map((project, idx) => (
                <tr key={idx}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.name}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
      </table>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

export default Home;