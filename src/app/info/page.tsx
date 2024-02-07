import Navbar from "@/functions/navBar";
import styles from "./page.module.css";
import SkillsList from "@/components/skillsList";
import CourseworkList from "@/components/coursesList";
import ReferencesList from "@/components/referencesList";

export default function Info() {
  const value = 1;
  return (
    <main className={styles.main}>
      <Navbar value={value}/>
      <div className={styles.Desc}>

        <div className="col">
            <h1>Information</h1>
        </div>

        <hr></hr>

        <div className="container" id={styles.desc0}>
            <h2>Coursework:</h2>
            <p>I&#39;ve taken programming related classes such as</p>
            <CourseworkList />
        </div>

        <hr></hr>

        <div className="container" id={styles.skills}>
            <h2>Skills:</h2>
            <p>I&#39;ve worked with the following tools</p>
            <SkillsList styles={styles}/>
        </div>

        <hr></hr>

        <div className="container" id={styles.desc0}>
            <h2>Contact me:</h2>
              <ReferencesList />
        </div>

      </div>
    </main>
  );
}
