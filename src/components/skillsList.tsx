import { useSkillsData } from "@/hooks/useSkillsData";
import { Skill } from "../functions/information"
import Form from "./Forms/form";
import { useAuthData } from "@/hooks/useAuth";
import DeleteBtn from "./Buttons/deleteBtn";
import { revalidatePath } from "next/cache";

type Skills = {
    name: string;
};

export default async function SkillsList({styles}: {styles: any}) {
    "use server"
    const { getSkill } = useSkillsData();
    const { getUser } = useAuthData();
    const skills = await getSkill();

    const useAddSkill = async (prevState: any, formData: FormData) => {
        "use server"
        const name = formData.get("Add skill") as string;
        const { addSkill } = useSkillsData();
        try {
            await addSkill({name});
            revalidatePath("/info");
            return {message: "", skill: name};
        } catch (e) {
            return {message: "An error has occured", skill: ""};
        }
    }

    const useDeleteSkill = async (name: string) => {
        "use server"
        const { deleteSkill } = useSkillsData();
        try {
            await deleteSkill({name});
            revalidatePath("/info");
        } catch (e) {

        }
    }

    const userStatus = () => {
        const user = getUser();
        if(user)
            return "logged in";
        else
            return "logged out";
    }

    return (
        <div className={styles.skillList}>
            {skills && skills.map((skill: Skills, index: number) => (
                <div key={index} className={styles.skillItem}>
                {userStatus() as string === "logged in" && <DeleteBtn erase={useDeleteSkill} item={skill.name}/>}
                <Skill key={index} name={skill.name} />
                </div>
            ))}
            {userStatus() as string === "logged in" && <Form labels={["Add skill"]} action={useAddSkill} styles={styles}/>}
            {!skills && <div>Loading...</div>}
        </div>
    )
};
