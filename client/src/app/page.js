import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>BABY Boss</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By ME
            
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h2>TO CHANGE OR NOT TO CHANGE</h2>
      </div>
      <div className={styles.center}>
        <p>That's the question !</p>
      </div>

      <div className={styles.grid}>
     
      </div>
    </main>
  );
}
