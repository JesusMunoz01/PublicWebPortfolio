import ProjectFormat from "@/functions/projects";
import { useProjectsData } from "../hooks/useProjectsData";
import { useAuthData } from "@/hooks/useAuth";
import DeleteBtn from "./Buttons/deleteBtn";
import ListForm from "./Forms/listForm";
import Actions from "./actions";
import { revalidatePath } from "next/cache";

export type Project = {
    title: string,
    keywords: string[],
    url: string,
    desc: string,
    imgURL: string[],
    id: string
}

export default async function ProjectsList() {
    const { getProject } = useProjectsData();
    const { getUser } = useAuthData();
    const projects = await getProject();

    const useAddProject = async (prevState: any, formData: FormData) => {
        "use server"
        const id = `p${projects.length + 1}`;
        const title = formData.get("Title") as string;
        const keywordsString = formData.get("Keywords") as string;
        const url = formData.get("URL") as string;
        const desc = formData.get("Description") as string;
        const imgURLString = formData.get("Image URL") as string;
        const keywords = keywordsString.split(",");
        const imgURL = imgURLString.split(",");
        const { addProject } = useProjectsData();
        try {
            await addProject({title, keywords, url, desc, imgURL, id});
            revalidatePath("/projects");
            return {message: "", project: title};
        } catch (e) {
            return {message: "An error has occured", project: ""};
        }
    }

    const useDeleteProject = async (id: string) => {
        "use server"
        const { deleteProject } = useProjectsData();
        try {
            await deleteProject({id});
            revalidatePath("/projects");
        } catch (e) {

        }
    }

    const useEditProject = async (prevState: any, formData: FormData) => {
        "use server"
        const id = formData.get("id") as string;
        const prevTitle = formData.get("prevTitle") as string
        const title = formData.get("Title") as string;
        const keywordsString = formData.get("Keywords") as string;
        const url = formData.get("URL") as string;
        const desc = formData.get("Description") as string;
        const imgURLString = formData.get("Image URL") as string;
        const keywords = keywordsString.split(",");
        const imgURL = imgURLString.split(",");
        const { editProject } = useProjectsData();
        try {
            await editProject({prevTitle, title, keywords, url, desc, imgURL, id});
            revalidatePath("/projects");
            return {message: "", project: title};
        } catch (e) {
            return {message: "An error has occured", project: ""};
        }
    }

    return (
        <div>
            {getUser() !== null &&
            <div style={{display:"flex", flexDirection: "row", gap: "10px"}}>
                <Actions name="Add Project" isPopup={false} styleName="addProject">
                    <ListForm labels={["Title", "Keywords", "URL", "Description", "Image URL"]} action={useAddProject}
                    fieldType={["text", "multiple", "text", "text", "multiple"]} title="Create a new project"/>
                </Actions>
            </div>
            }
            <hr></hr>
            {projects && projects.map((project: Project, index: number) => (
                <div key={index} className="projectItem">
                    {getUser() !== null ? 
                    <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                        <DeleteBtn erase={useDeleteProject} item={project.title} name="Delete Project" styleName="borderlessShadow"/> 
                        <Actions name="Edit Project" isPopup={false} styleName="editProject">
                            <ListForm labels={["Title", "Keywords", "URL", "Description", "Image URL"]} action={useEditProject}
                            fieldType={["text", "multiple", "text", "text", "multiple"]} title={`Edit ${project.title}`}
                            previousData={{"Title": project.title, "Keywords":project.keywords, "URL":project.url ,
                                "Description":project.desc, "Image URL":project.imgURL, "id":project.id}}/>
                        </Actions>
                    </div>
                    : null
                    }
                    <ProjectFormat key={index} title={project.title} keywords={project.keywords} url={project.url} 
                    desc={project.desc} imgURL={project.imgURL} id={project.id}/>
                </div>
            ))}
            {!projects && <div>Loading...</div>}
        </div>
    )
};
