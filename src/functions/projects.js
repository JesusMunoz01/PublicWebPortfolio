import Projects from "../details/Projects";
import Navbar from "./navBar";

function ProjectList({title, keywords, url, desc, imgUrl, id}){
    return(
        <div>
            <div class="row">
                <div class="col-md-4">
                    <h2>{title}</h2>
                    <div id="imgDiv">
                        <p>
                            {imgUrl.map(image => (
                                <img id={id} src={image}></img>
                            ))}
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                <h2>Skills:</h2><br></br>
                    <p>
                        {keywords.map(item => (
                            <a class="container">
                            <span class="badge badge-secondary" id="keyword">{item}</span>
                            </a>
                        ))}
                    </p>
                </div>
                <div class="col-md-4">
                <h2>Description:</h2><br></br>
                    <span class="container" id="pText">{desc}</span>
                </div>
            </div>
                <br></br>
                <a href={url} class="link-info">{url}</a>
                <hr></hr>
        </div>
    )
}

function PProjects() {
    const value = 2;
    return(
        <>
            <Navbar value={value}/>
            <div class="container" className="Projects">
                <div class="col" id="desc1">
                    <h1>Personal Projects</h1>
                </div>
                <hr></hr>
                <div class="container-fluid">
                        {Projects.map(project => (
                        <ProjectList title={project.title} keywords={project.keywords} url={project.url} desc={project.desc} imgUrl={project.imgUrl} id={project.id}/>
                        ))}
                </div>
            </div>
        </>
    )
}

export default PProjects;