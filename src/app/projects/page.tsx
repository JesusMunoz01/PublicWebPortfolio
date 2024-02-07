import styles from "./page.module.css";
import Navbar from "@/functions/navBar";
import ProjectsList from "@/components/projectsList";

export default function Projects() {
  const value = 2;
  return (
    <main className={styles.main}>
      <Navbar value={value}/>
      <div className={styles.Projects}>
          <div className="col" id={styles.desc1}>
              <h1>Personal Projects</h1>
          </div>
          <hr></hr>
          <div className="container-fluid">
            <ProjectsList />
          </div>
      </div>
    </main>
  );
}
