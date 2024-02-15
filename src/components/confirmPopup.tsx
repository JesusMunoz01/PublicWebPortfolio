import { useState } from "react";
import styles from "./CSS/confirmPopup.module.css";

type ConfirmPopupProps = {
    close?: () => void
    confirm?: (e?: any) => void
}

export default function ConfirmPopup({close, confirm}: ConfirmPopupProps) {
    const [cancel, setCancel] = useState(false);
    
    return (
        <>
        {!cancel &&
        <div className={styles.popupBackground}>
            <div className={styles.popup}>
                <h1>Are you sure?</h1>
                <p>Are you sure you want to delete this project?</p>
                <hr></hr>
                <div className={styles.popupButtons}>
                    <button className={styles.confirm}>Confirm</button>
                    <button className={styles.cancel} onClick={close}>Cancel</button>
                </div>
            </div>
        </div>
        }
        </>
    )
};
