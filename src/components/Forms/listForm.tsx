"use client"
import { useState } from "react";
import styles from "../CSS/listForm.module.css";
import { useFormState } from "react-dom";

type FormState = {
    message: string;
}

type TPreviousData = {
    "Title": string;
    "Keywords": string[];
    "URL": string;
    "Description": string;
    "Image URL": string[];
    "id": string;
    [key: string]: string | string[];
}

type Form = {
    labels: string[];
    action: (prevState: any, formData: FormData) => Promise<FormState>;
    fieldType?: string[];
    title: string;
    previousData?: TPreviousData;
};

type FieldArray = {
    [key: string]: string[];
}

type ItemsInput = {
    [key: string]: string;
}

export default function ListForm({labels, action, fieldType, title, previousData}: Form) {
    let initialFieldArray: FieldArray;
    previousData ?
        initialFieldArray = labels.reduce((acc, label) => ({...acc, [label]: previousData[label] as string[]}), {} as FieldArray) :
        initialFieldArray = labels.reduce((acc, label) => ({...acc, [label]: []}), {} as FieldArray);
    const initialItemArray: ItemsInput = labels.reduce((acc, label) => ({...acc, [label]: ""}), {} as ItemsInput);
    const [formData, formAction] = useFormState(action, {message: ""})
    const [fieldArray, setFieldArray] = useState<FieldArray>(initialFieldArray);
    const [itemName, setItemName] = useState<ItemsInput>(initialItemArray)

    const addItem = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
        e.preventDefault();
        e.stopPropagation();
        if (itemName[labels[index]]) {
            if (fieldArray[labels[index]]) {
                setFieldArray({...fieldArray, [labels[index]]: [...fieldArray[labels[index]], itemName[labels[index]]]});
            } else {
                setFieldArray({...fieldArray, [labels[index]]: [itemName[labels[index]]]});
            }
            const update = itemName[labels[index]] = "";
            setItemName({...itemName, [labels[index]]: update});
            console.log(itemName)
        }
    }

    return (
        <>
        <div className={styles.form} >
        <p style={{color: "red"}}>{formData?.message}</p>
        <h3>{title}</h3>
        <form action={formAction} className={styles.listForm}>
            {previousData && previousData.id && <input type="hidden" id="id" name="id" defaultValue={previousData.id} required/>}
            {previousData && previousData.Title && <input type="hidden" id="prevTitle" name="prevTitle" defaultValue={previousData.Title} required/>}
            {labels.map((label, index) => (
                <div key={index}>
                    <label htmlFor={label}>{label}:</label>
                    {fieldType && fieldType[index] === "multiple" ? 
                        <>
                        <div className={styles.choiceList}>{fieldArray[label].map((item, index) => 
                            <div key={index} style={{display: "flex", flexDirection: "row"}}>
                            <button className={styles.deleteBtn} type="button"
                            onClick={() => setFieldArray({...fieldArray, [label]: fieldArray[label].filter((i, ind) => ind !== index)})}>X</button>
                            <span className={styles.item}>{item}</span>
                            </div>
                            )}
                        </div>
                        <input type="hidden" id={label} name={label} value={fieldArray[label]} required />
                        <input type="text" style={{width: "80%"}} value={itemName[label]}
                            onChange={(e) => setItemName({...itemName, [labels[index]]: e.target.value})}/>
                        <button type="button" style={{width: "20%"}} onClick={(e) => addItem(e, index)}>Add</button>
                        </>:
                        previousData ? 
                        <input type="text" id={label} name={label} defaultValue={previousData[label]} required/> :
                        <input type="text" id={label} name={label} required/>
                    }
                </div>
            ))}
            <button type="submit" style={{marginBottom: "10px"}}>Submit</button>
        </form>
        </div> 
        </>
    )
    
};
