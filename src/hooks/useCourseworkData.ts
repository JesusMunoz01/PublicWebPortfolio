"use server"
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

type Coursework = {
    courseName: string;
};

export const useCourseworkData = () => {

    const addCoursework = async ({courseName}: Coursework) => {
        try {
            await setDoc(doc(db, "coursework", courseName), {
                courseName,
            }, { merge: true})
        } catch (e) {
            console.error("Error adding coursework: ", e);
        }
    };

    const getCoursework = async () => {
        let coursework: Coursework[] = [];
        try {
            const querySnapshot = await getDocs(collection(db, "coursework"));
            querySnapshot.forEach((doc) => {
                coursework.push(doc.data() as Coursework);
            });
        }
        catch (e) {
            console.error("Error fetching coursework: ", e);
        }
        return coursework;
    }
    
    return { addCoursework, getCoursework };
}