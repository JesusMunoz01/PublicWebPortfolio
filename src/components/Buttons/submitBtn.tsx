"use client"
import { useFormStatus } from "react-dom"

export default function SubmitBtn({error, btnText}: {error: string, btnText: string}) {
    const { pending } = useFormStatus();
    return (
        <div>
            {error && <p>{error}</p>}
            <button type="submit" disabled={pending}>{btnText}</button>
        </div>
    )
}