import { Course } from "../functions/information"
import { useCourseworkData } from "@/hooks/useCourseworkData";

type Coursework = {
    courseName: string;
};

export default async function CourseworkList() {
    const { getCoursework } = useCourseworkData();
    const course = await getCoursework();

    return (
        <div>
            {course && course.map((course: Coursework, index: number) => (
                <Course key={index} name={course.courseName} />
            ))}
            {!course && <div>Loading...</div>}
        </div>
    )
};
