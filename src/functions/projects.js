import styles from "../app/projects/page.module.css"
import Image from "next/image"

function ProjectFormat({title, keywords, url, desc, imgURL, id}){
    return(
        <div key={`${id}`}>
            <div className="row">
                <div className="col-md-4">
                    <h2>{title}</h2>
                    <div id={styles.imgDiv}>
                        <p>
                            {imgURL.map((image, index) => (
                                <Image key={index} alt={`${title} ${index}`} id={styles[`${id}`]} src={`/${image}`} width={500} height={300}/>
                            ))}
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                <h2>Skills:</h2><br></br>
                    <p>
                        {keywords.map((item, index) => (
                            <a key={index} className="container">
                            <span className="badge badge-secondary" id={styles.keyword}>{item}</span>
                            </a>
                        ))}
                    </p>
                </div>
                <div className="col-md-4">
                <h2>Description:</h2><br></br>
                    <span className="container" id={styles.pText}>{desc}</span>
                </div>
            </div>
                <br></br>
                <a href={url} className={styles.linkInfo}>{url}</a>
                <hr></hr>
        </div>
    )
}

export default ProjectFormat;