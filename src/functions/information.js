import styles from "../app/info/page.module.css"

export function Course({name, key}){
    return(
        <div className="container">
            <p>
            <a className="container">
                <span className="badge badge-secondary" id={styles.courseList}>{name}</span>
            </a>
            </p>
        </div>
    )
}

export function Skill({name, key}){
    return(
        <div className="container" id={styles.skillsList}>
        {
            <p>
                <a className="container">
                    <span className="badge badge-secondary" id={styles.keyword}>{name}</span>
                </a>
            </p>
        }
        </div>
    )
}

export function Reference({title, url, hasLink, key}){
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