import Link from "next/link";
import styles from "../app/page.module.css"

function Navbar({value}) {
    if(value == 0)
        return(
            <div className={styles.topnav}>
                <Link href="/projects" ><span>Projects</span></Link>
                <Link href="/info" ><span>Information</span></Link>
                <Link className={styles.active} href="/"><span>Home</span></Link>
            </div>
        )
    else if(value == 1)
        return(
            <div className={styles.topnav}>
                <Link href="/projects" ><span>Projects</span></Link>
                <Link className={styles.active} href="/info" ><span>Information</span></Link>
                <Link href="/"><span>Home</span></Link>
            </div>
        )
    else
        return(
            <div className={styles.topnav}>
                <Link className={styles.active} href="/projects"><span>Projects</span></Link>
                <Link href="/info" ><span>Information</span></Link>
                <Link href="/"><span>Home</span></Link>
            </div>
        )
}

export default Navbar;