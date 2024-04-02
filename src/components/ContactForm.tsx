import { IconSend2 } from "@tabler/icons-react";
import { useState } from "react";
import { render } from "@react-email/render";
import { SampleEmail } from "../emails/SampleEmail";
import { toast } from "sonner";

export function ContactForm() {
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { message, email } = Object.fromEntries(formData)

        const finalHTML = render(<SampleEmail reviewText={message as string} email={email as string} />, {
            pretty: true,
        })

        const finalText = render(<SampleEmail reviewText={message as string} email={email as string} />, {
            plainText: true,
        })

        try {
            const res = await fetch("/api/sendEmail.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: "onboarding@resend.dev",
                    to: "psarmientoayala@gmail.com",
                    subject: `|| 🚀 ${email}, te han dejado un nuevo mensaje ||`,
                    html: finalHTML,
                    text: finalText
                }),
            });
            const data = await res.json()
            toast.success('Message sent to @pipo05!')
            setMessage('')
            setEmail('')
        } catch (e) {
            console.error(e)
            toast.error('Something went wrong. Please try again later.')
        }
    }
    return (
        <form
            className='w-full flex flex-row'
            role="form"
            onSubmit={handleSubmit}
        >
            <div className="rounded-l-md border border-white/20">
                <input
                    className='bg-transparent px-3 py-1 placeholder:text-neutral-600 text-xs focus:bg-inherit focus:outline-none w-full '
                    type='email'
                    id="email"
                    name="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    className='bg-transparent px-3 py-1 placeholder:text-neutral-600 text-xs focus:bg-inherit focus:outline-none w-full'
                    type='text'
                    id="message"
                    name="message"
                    placeholder='Message @pipo05'
                    required
                    value={message}
                    onChange={handleMessageChange}
                />
            </div>
            <button type="submit"
                className='border border-white/20 px-3 py-2 rounded-r-md bg-zinc-950'
            ><IconSend2 />
            </button>
        </form>
    )
}