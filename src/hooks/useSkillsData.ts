"use server"
import { collection, doc, setDoc, getDocs, orderBy, query, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

type Skills = {
    name: string;
};

export const useSkillsData = () => {

    const addSkill = async ({name}: Skills) => {
        try {
            await setDoc(doc(db, "skills", name), {
                name,
            }, { merge: true})
        } catch (e) {
            console.error("Error adding skill: ", e);
        }
    };

    const getSkill = async () => {
        let skills: Skills[] = [];
        try {
            const querySnapshot = await getDocs(query(collection(db, "skills"), orderBy("name")));
            querySnapshot.forEach((doc) => {
                skills.push(doc.data() as Skills);
            });
        }
        catch (e) {
            console.error("Error fetching skill: ", e);
        }
        return skills;
    }

    const deleteSkill = async ({name}: Skills) => {
        try {
            await deleteDoc(doc(db, "skills", name));
        } catch (e) {
            console.error("Error deleting skill: ", e);
        }
    }
    
    return { addSkill, getSkill, deleteSkill };
}