import { Outlet, Link } from "react-router-dom";
function Navbar({value}) {
    if(value == 0)
        return(
            <div className="topnav">
                <a><Link to="/projects" ><span>Projects</span></Link></a>
                <a><Link to="/info" ><span>Information</span></Link></a>
                <a class="active"><Link href="/WebPortfolio"><span>Home</span></Link></a>
            </div>
        )
    else if(value == 1)
        return(
            <div className="topnav">
                <a><Link to="/projects" ><span>Projects</span></Link></a>
                <a class="active"><Link to="/info" ><span>Information</span></Link></a>
                <a><Link to="/"><span>Home</span></Link></a>
            </div>
        )
    else
        return(
            <div className="topnav">
                <a class="active"><Link to="/projects"><span>Projects</span></Link></a>
                <a><Link to="/info" ><span>Information</span></Link></a>
                <a><Link to="/"><span>Home</span></Link></a>
            </div>
        )
}

export default Navbar;