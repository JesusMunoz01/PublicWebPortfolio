import React from "react";
import { useAuthData } from "../hooks/useAuth";
import SubmitBtn from "./Buttons/submitBtn";

export default function Signup({styles}: {styles: any}) {
    const { authSignup } = useAuthData();
    
    const userSignup = async (formData: FormData) => {
        "use server"
        const email = formData.get("username") as string;
        const password = formData.get("password") as string;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/;
        if(!passwordRegex.test(password))
            return alert("Password must be at least 6 characters long and contain at \
            least one lowercase letter, one uppercase letter, one number, and one special character");
        try {
            await authSignup({email, password});
        } catch (e) {
            
        }
    };
    
    return (
        <div className={styles.signup}>
            <form action={userSignup} className={styles.signupForm}>
                <h1>Sign Up</h1>
                <label>Email</label>
                <input name="username" type="email" required />
                <label>Password</label>
                <input name="password" type="password" required />
                <SubmitBtn error="" btnText="Sign Up"/>
            </form>
        </div>
    )

}