"use client"
import React, { useEffect, useState } from "react";
import SubmitBtn from "./submitBtn";
import { useFormState } from "react-dom";

type FormState = {
    message: string;
    login: boolean;
    user: string;
}

type SigninProps = {
    styles: any;
    userLogin: (prevState: any, formData: FormData) => Promise<FormState>;
    userSignout: () => void;
}

const initialState: FormState = {
    message: "",
    login: false,
    user: ""
}

export default function Signin({ styles, userLogin, userSignout }: SigninProps) {
    const [formData, formAction] = useFormState(userLogin, initialState)
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if(formData?.login) {
            localStorage.setItem("user", formData?.user);
            setIsLogged(true);
        }
    }, [formData.login])

    const signout = () => {
        try {
            localStorage.removeItem("user");
            setIsLogged(false);
            userSignout();
        }
        catch(e) {
            console.log(e);
        }
    }
    
    return (
        <div className={styles.signin}>
            {isLogged ? 
            <div className={styles.loggedStatus}>
                <h1>Welcome, {formData?.user}</h1> 
                <button onClick={signout}>Sign Out</button>
            </div>
            :
            <form action={formAction} className={styles.signinForm}>
            <p aria-live="polite" style={{color: "red"}}>{formData?.message}</p>
                <h1>Sign In</h1>
                <label>Email</label>
                <input name="username" type="email" required />
                <label>Password</label>
                <input name="password" type="password" required />
                <SubmitBtn error="" btnText="Login"/>
            </form>}
        </div>
    )

}