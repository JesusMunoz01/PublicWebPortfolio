"use server"
import { collection, doc, setDoc, getDocs, query, orderBy, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

type Projects = {
    prevTitle?: string;
    title: string;
    keywords: string[];
    url: string;
    imgURL: string[];
    id: string;
    desc: string;
};

export const useProjectsData = () => {

    const addProject = async ({title, keywords, url, imgURL, id, desc}: Projects) => {
        try {
            await setDoc(doc(db, "projects", title), {
                title,
                keywords,
                url,
                imgURL,
                id,
                desc
            }, { merge: true})
        } catch (e) {
            console.error("Error adding project: ", e);
        }
    };

    const getProject = async () => {
        let projects: Projects[] = [];
        try {
            const querySnapshot = await getDocs(query(collection(db, "projects"), orderBy("id", "desc")));
            querySnapshot.forEach((doc) => {
                projects.push(doc.data() as Projects);
            });
        }
        catch (e) {
            console.error("Error fetching projects: ", e);
        }
        return projects;
    }

    const deleteProject = async ({id}: {id: string}) => {
        try {
            await deleteDoc(doc(db, "projects", id));
        } catch (e) {
            console.error("Error deleting project: ", e);
        }
    }

    const editProject = async ({prevTitle, title, keywords, url, imgURL, id, desc}: Projects) => {
        try{
            if(prevTitle && (prevTitle !== title)) {
                await deleteDoc(doc(db, "projects", prevTitle));
                await setDoc(doc(db, "projects", title), {
                    title,
                    keywords,
                    url,
                    imgURL,
                    id,
                    desc
                }, { merge: true});
            }
            else{
                await updateDoc(doc(db, "projects", title), {
                    title,
                    keywords,
                    url,
                    imgURL,
                    id,
                    desc
                });
            }
        }
        catch (e) {
            console.error("Error editing project: ", e);
        }
    }
    
    return { addProject, getProject, deleteProject, editProject };
}