import ImageSlider from "@/components/imageSlider";
import styles from "../app/projects/page.module.css"

function ProjectFormat({title, keywords, url, desc, imgURL, id}){
    return(
        <div key={`${id}`}>
            <div className="row">
                <div className="col-md-8" style={{display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent:"flex-start"}}>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.imgDiv}>
                        <ImageSlider key={id} imgURL={imgURL} id={id}/>
                    </div>
                </div>
                <div className="col">
                <h2>Skills:</h2><br></br>
                    <p>
                        {keywords.map((item, index) => (
                            <a key={index} className="container">
                            <span className="badge badge-secondary" id={styles.keyword}>{item}</span>
                            </a>
                        ))}
                    </p>
                </div>
                <div className="col-md-auto">
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