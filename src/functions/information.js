import styles from "../app/info/page.module.css"

export function Course({name}){
    return(
        <div className="container">
            <span className="badge badge-secondary" id={styles.courseList}>{name}</span>
        </div>
    )
}

export function Skill({name}){
    return(
        <div className={styles.skillsList} id={styles.skillsList}>
            <span className="badge badge-secondary" id={styles.keyword}>{name}</span>
        </div>
    )
}

export function Reference({title, url, hasLink}){
    return(
        <div className="container">
        {hasLink ?
            <p>{title}: <a href={url} className={styles.linkInfo}>{url}</a></p>
        :
            <p>{title}: {url}</p>
        }
        </div>
    )
}