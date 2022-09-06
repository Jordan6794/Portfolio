import { FunctionComponent, useRef, useState } from "react"
import emailjs from '@emailjs/browser'

import EnvelopeSVG from "../../public/envelope.svg"

import styles from "./Contact.module.css"

const CTA: FunctionComponent = () => {
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSending, setIsSending] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const formRef = useRef(null)

    function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
        setFormInputs(prevInputs => ({...prevInputs, name: event.target.value}))
    }
    function onChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setFormInputs(prevInputs => ({...prevInputs, email: event.target.value}))
    }
    function onChangeMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setFormInputs(prevInputs => ({...prevInputs, message: event.target.value}))
    }

    async function onSubmit(event: React.FormEvent){
        event.preventDefault()
        setIsSending(true)
        setSuccessMessage('')
        setErrorMessage('')
        await sendEmail()
        setIsSending(false)
    }

    async function sendEmail() {
        if(!process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAIL_APIKEY || !formRef.current){
            setErrorMessage("Something went wrong. Please try again.")
            return
        }
        try {
            await emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_EMAIL_APIKEY)
            setSuccessMessage("Thank you. Your message has been sent successfully!")
            setFormInputs({
                name: '',
                email: '',
                message: ''
            })
        } catch (error: any) {
            setErrorMessage("Something went wrong. Please try again.")
            console.log(error.text)
        }

    }

    return(
            <section id="contact" className={styles.section}>
                <div className="my-container">
                    <div className="container-text-align">
                        <h3 className="section-title">Contact me</h3>
                    </div>
                    <div className={styles.formContentContainer}>
                            <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
                                
                                <div className={styles.maiLAndEmailDiv}>
                                    <div className={styles.flexColumn}>
                                        <label className={styles.label} htmlFor="user_name">Name</label>
                                        <input required className={styles.input} name="user_name" id="user_name" type="text" value={formInputs.name} onChange={onChangeName}/>
                                    </div>
                                    
                                    <div className={styles.flexColumn}>
                                        <label className={styles.label} htmlFor="user_email">Email</label>
                                        <input required className={styles.input} name="user_email" id="user_email" type="email" value={formInputs.email} onChange={onChangeEmail}/>
                                    </div>
                                </div>
                                
                                <label className={styles.label} htmlFor="message">Message</label>
                                <textarea required className={styles.textarea} name="message" id="message" value={formInputs.message} onChange={onChangeMessage}></textarea>
                                
                                <button disabled={isSending} className="my-btn btn-form">{isSending ? 'Sending...' : 'Send message'}</button>
                                
                                {successMessage && <p className={`${styles.formConfirmation} ${styles.success}`}>{successMessage}</p>}
                                {errorMessage && <p className={`${styles.formConfirmation} ${styles.error}`}>{errorMessage}</p>}

                            </form>
                            <div className={styles.imageContainer}>
                                <EnvelopeSVG className={styles.illustrationSvg} />
                            </div>
                    </div>
                </div>
            </section>
    )
}

export default CTA