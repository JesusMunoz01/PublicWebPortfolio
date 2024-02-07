"use server"
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

type References = {
    name: string;
    url: string;
    hasLink: boolean;
};

export const useReferencesData = () => {

    const addReference = async ({name, url, hasLink}: References) => {
        try {
            await setDoc(doc(db, "references", name), {
                name,
                url,
                hasLink
            }, { merge: true})
        } catch (e) {
            console.error("Error adding references: ", e);
        }
    };

    const getReference = async () => {
        let references: References[] = [];
        try {
            const querySnapshot = await getDocs(collection(db, "references"));
            querySnapshot.forEach((doc) => {
                references.push(doc.data() as References);
            });
        }
        catch (e) {
            console.error("Error fetching references: ", e);
        }
        return references;
    }
    
    return { addReference, getReference };
}