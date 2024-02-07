"use server"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import { auth } from "../config/firebase";

type Auth = {
    email: string;
    password: string;
};

export const useAuthData = () => {

    const authSignup = async ({email, password}: Auth) => {
        try {
            if(!email || !password)
                throw new Error("Email and password are required");
            await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                sendEmailVerification(user)
                // ...
            })
        } catch (e) {
            console.error("Failed to create account: ", e);
        }
    }

    const authSignin = async ({email, password}: Auth) => {
        try {
            const currentUser = signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if(user.displayName !== null)
                    return user.displayName
                else
                    return user.email as string
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
            return currentUser;
        } catch (e) {
            console.error("Failed to log in: ", e);
        }
        return "";
    }

    const authSignout = async () => {
        try {

            signOut(auth).then(() => {
                // Sign-out successful.
                console.log("Successfully logged out");
            }).catch((error) => {
                // An error happened.
                console.error("Error logging out: ", error);
            });
        } catch (e) {
            console.error("Failed to log out: ", e);
        }
    
    }

    return { authSignup, authSignin, authSignout };
}