import styles from "./page.module.css";
import Intro from "../functions/intro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro className={styles}/>
    </main>
  );
}
