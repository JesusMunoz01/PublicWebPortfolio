import { useSkillsData } from "@/hooks/useSkillsData";
import { Skill } from "../functions/information"

type Skills = {
    name: string;
};

export default async function SkillsList({styles}: {styles: any}) {
    const { getSkill } = useSkillsData();
    const skills = await getSkill();

    return (
        <div className={styles.skillList}>
            {skills && skills.map((skill: Skills, index: number) => (
                <Skill key={index} name={skill.name} />
            ))}
            {!skills && <div>Loading...</div>}
        </div>
    )
};
