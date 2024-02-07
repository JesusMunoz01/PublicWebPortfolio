import Navbar from "./navBar";

function Intro({className}) {

    const value = 0;
    return(
        <>
            <Navbar value={value}/>
            <div className="container" id={className.Intro}>
                    <div className="container" id={className.introBundle}>
                        <div className="container" id={className.desc1}>
                            <span>Hello, I&#39;m</span>
                            <h1>Jesus Munoz</h1>
                            <p>Software engineer and Web Developer</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="container" id={className.introAbout}>
                        <h2>About me:</h2>
                        <p id={className.pText}>I&#39;m a recent college graduate with a bachelor&#39;s degree in Computer Science.
                            I&#39;m interested in helping develop applications and features that can help
                            others have an easier time dealing with daily tasks such as finances. I&#39;m very
                            passionate about software development and I&#39;d love to work with experienced teams
                            to expand my knowledge. I&#39;ve mostly worked on university projects so far (see projects sections)
                            as both a solo developer and a team member. I have experience using GitHub for branching/pull requests
                            and have followed Agile Methodology for most of my projects. If you want to see more details about me
                            or contact me, visit the information section.
                        </p>
                    </div>
            </div>
        </>
    )
}

export default Intro;