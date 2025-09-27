import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div> 
          <p>안녕하세요! 백엔드 개발자를 준비중인 김현원입니다.</p>
        </div>
        
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

export default Home;