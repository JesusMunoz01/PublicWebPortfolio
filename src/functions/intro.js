import Navbar from "./navBar";

function Intro() {
    const value = 0;
    return(
        <>
            <Navbar value={value}/>
            <div class="container" id="Intro">
                    <div class="container" id="introBundle">
                        <div class="container" id="desc1">
                            <span>Hello, I'm</span>
                            <h1>Jesus Munoz</h1>
                            <p>Software engineer and Web Developer</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div class="container" id="introAbout">
                        <h2>About me:</h2>
                        <p id="pText">I'm a recent college graduate with a bachelor's degree in Computer Science.
                                    I'm interested in helping develop applications and features that can help
                                    others have an easier time dealing with daily tasks such as finances. I'm very
                                    passionate about software development and I'd love to work with experienced teams
                                    to expand my knowledge. I've mostly worked on university projects so far (see projects sections)
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