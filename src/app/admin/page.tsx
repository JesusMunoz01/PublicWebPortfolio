import Signin from "@/components/signin";
import Signup from "../../components/signup";
import styles from "./page.module.css";
import { useAuthData } from "../../hooks/useAuth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function Admin() {
  
  const useLogin = async (prevState: any, formData: FormData) => {
    "use server"
    const { authSignin } = useAuthData();
    const email = formData.get("username") as string;
    const password = formData.get("password") as string;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/;
    if(!passwordRegex.test(password))
    return {message: "Password must be at least 6 characters long and contain at \
  least one lowercase letter, one uppercase letter, one number, and one special character", login: false, user: ""};
  try {
    const username = await authSignin({email, password});
    revalidatePath("/info");
    revalidatePath("/projects");
    if(username)
      return {message: "", user: username as string, login: true};
    else
      return {message: "Invalid username or password", login: false, user: ""};
  } catch (e) {
    return {message: "An error has occured", login: false, user: ""};
  }
};

const useSignout = async () => {
  "use server"
  const { authSignout } = useAuthData();
    try {
        await authSignout();
        revalidatePath("/info");
        revalidatePath("/projects");
    } catch (e) {
        
    }
    redirect("/");
  };

  const redirectUser = async () => {
    "use server"
    redirect("/")
  }

  return (
    <main className={styles.main}>
      <h1>Admin Login</h1>
      {/* <Signup styles={styles}/> */}
      <Signin styles={styles} userLogin={useLogin} userSignout={useSignout} redirect={redirectUser}/>
    </main>
  );
}
