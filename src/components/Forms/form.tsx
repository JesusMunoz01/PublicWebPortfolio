"use client"
import { useFormState } from "react-dom";

type FormState = {
    message: string;
}

type Form = {
    labels: string[];
    action: (prevState: any, formData: FormData) => Promise<FormState>;
    styles?: any;
};

export default function Form({labels, action, styles}: Form) {
    const [formData, formAction] = useFormState(action, {message: ""})

    return (
        <>
        <div className={styles ? styles.form : ""} >
        <p style={{color: "red"}}>{formData?.message}</p>
        <form action={formAction}>
            {labels.map((label, index) => (
                <div key={index}>
                    <label htmlFor={label}>{label}</label>
                    <input type={label} id={label} name={label} />
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
        </div> 
        </>
    )
    
};
