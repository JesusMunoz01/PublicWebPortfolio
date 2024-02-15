"use client"
import { useState } from "react";
import styles from "./CSS/actions.module.css"
import ConfirmPopup from "./confirmPopup";

type ActionsProps = {
    name: string
    actionFunction?: (e?: any) => void
    children?: React.ReactNode
    isPopup: boolean
    styleName?: string
}

export default function Actions({name, actionFunction, children, isPopup, styleName}: ActionsProps) {
    const [showChildren, setShowChildren] = useState(false);

    const confirmAction = () => {
        if(actionFunction)
            actionFunction();
        setShowChildren(false);
    }
    
    return (
        <>
        <div className={styleName ? styles[styleName]: ""}>
            <button onClick={() => setShowChildren(!showChildren)}>{name}</button>
        </div>
        {isPopup && showChildren && <ConfirmPopup close={() => setShowChildren(false)} confirm={confirmAction}/>}
        {!isPopup && showChildren && 
            <div className={styles.childrenBackground}>
                <div className={styles.children}>
                    <button className={styles.close} onClick={() => setShowChildren(!showChildren)}>Cancel</button>
                    {children}
                </div>
            </div>
        }
        </>
    )
};
