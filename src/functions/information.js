import Coursework from "../details/Coursework"; 
import References from "../details/References";
import Skills from "../details/Skills";
import Navbar from "./navBar";

function Courses({name}){
    return(
        <div class="container">
            <p>
            <a class="container">
                <span class="badge badge-secondary" id="courseList">{name}</span>
            </a>
            </p>
        </div>
    )
}

function Skill({web, se, db, all}){
    return(
        <div class="container" id="skillsList">
            {
            <p>
                {all.map(item => (
                    <a class="container">
                        <span class="badge badge-secondary" id="keyword">{item}</span>
                    </a>
                ))}
                </p>
            /* <p>
            {web.map(item => (
                        <a class="container">
                        <span class="badge badge-secondary" id="keyword">{item}</span>
                        </a>
            ))}
            </p>
            <p>
            {se.map(item => (
                        <a class="container">
                        <span class="badge badge-secondary" id="keyword">{item}</span>
                        </a>
            ))}
            </p>
            {db.map(item => (
                        <a class="container">
                        <span class="badge badge-secondary" id="keyword">{item}</span>
                        </a>
            ))} */}
        </div>
    )
}

function Reference({title, url, hasLink}){
    return(
        <div>
        {hasLink ?
            <p>{title}: <a href={url} class="link-info">{url}</a></p>
        :
            <p>{title}: {url}</p>
        }
        </div>
    )
}

function Info() {
    const value = 1;
    return(
        <>
            <Navbar value={value}/>
            <div class="container" className="Desc">
                    <div class="col">
                        <h1>Information</h1>
                    </div>
                    <hr></hr>
                        <div class="container" id="desc0">
                            <h2>Coursework:</h2>
                                <p>I've taken programming related classes such as</p>
                                    {Coursework.map(course => (
                                        <Courses name={course.courseName}/>
                                    ))}
                        </div>
    
                    <hr></hr>
                        <div class="container" id="skills">
                            <h2>Skills:</h2>
                                <p>I've worked with the following tools</p>
                                        {Skills.map(skill => (
                                            <Skill web={skill.web} se={skill.se} db={skill.db} all={skill.all}/>
                                        ))}
                        </div>
                    <hr></hr>
                        <div class="container" id="desc0">
                            <h2>Contact me:</h2>
                            {References.map(item => (
                                <Reference title={item.name} url={item.url} hasLink={item.hasLink}/>
                            ))}
                        </div>
            </div>
        </>
    )
}

export default Info;