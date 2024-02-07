import { useReferencesData } from "@/hooks/useReferencesData";
import { Reference } from "../functions/information"

type References = {
    name: string;
    url: string;
    hasLink: boolean;
};

export default async function ReferencesList() {
    const { getReference } = useReferencesData();
    const course = await getReference();

    return (
        <div>
            {course && course.map((reference: References, index: number) => (
                <Reference key={index} title={reference.name} url={reference.url} hasLink={reference.hasLink}/>
            ))}
            {!course && <div>Loading...</div>}
        </div>
    )
};
