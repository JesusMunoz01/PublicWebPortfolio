"use client"
import styles from "../CSS/deleteBtn.module.css"

type DeleteBtnProps = {
    erase: (name: string) => Promise<void>;
    item: string;
    name?: string;
    styleName?: string;
}

export default function DeleteBtn({erase, item, name, styleName}: DeleteBtnProps) {

    const confirm = () => {
        erase(item);
    }

    return (
        <div>
            <button type="submit" onClick={confirm} className={styleName ? styles[styleName] : styles.basic}>{name ? name : "X"}</button>
        </div>
    )
}