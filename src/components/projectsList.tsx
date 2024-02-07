import ProjectFormat from "@/functions/projects";
import { useProjectsData } from "../hooks/useProjectsData";

type Project = {
    title: string,
    keywords: string[],
    url: string,
    desc: string,
    imgURL: string[],
    id: string
}

export default async function ProjectsList() {
    const { getProject } = useProjectsData();
    const projects = await getProject();

    return (
        <div>
            {projects && projects.map((project: Project, index: number) => (
                <ProjectFormat key={index} title={project.title} keywords={project.keywords} url={project.url} 
                desc={project.desc} imgURL={project.imgURL} id={project.id}/>
            ))}
            {!projects && <div>Loading...</div>}
        </div>
    )
};
