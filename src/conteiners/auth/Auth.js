import React, {useRef, useState} from 'react'
import styles from './auth.module.css'
import img from '../../img/salyDesktop.svg'
import Email from "../../components/input/Email";
import Password from "../../components/input/Password";

export const Auth = () => {
    const [input, setInput] = useState({
        passwordValue: '',
        emailValue: '',
        passwordRequired: false
    })
    const passwordValue = (event) => {
        console.log(event.target.value);
        setInput({...input, passwordValue: event.target.value})
        console.log(input);

    }
    const emailValue = (event) => {
        console.log(event.target.value);
        setInput({...input, emailValue: event.target.value})
        console.log(input);
    }
    const formSubmit = (e) => {
        e.preventDefault()
        if(input.passwordValue===''){
            setInput({...input,passwordRequired: true})
        }
        if (input.passwordValue!==''){
            setInput({...input,passwordRequired:false})
            if (!input.passwordRequired) {
                alert(`Done!! password ${input.passwordValue} ${input.emailValue}`)
            }
        }

    }
    return (
        <main>
            <div className={styles.imgWrapper}><img src={img} alt=""/></div>
            <div className={styles.card}>
                <p className={styles.title}>login</p>
                <form onSubmit={(e) => formSubmit(e)} className={styles.form}>
                    <Email  emailRequired={input.emailRequired}
                           emailValue={emailValue}/>
                    <Password
                        passwordRequired={input.passwordRequired}
                        passwordValue={passwordValue}/>
                    <button>log in</button>
                </form>
                <div className={styles.footer}>
                    <p className={styles.forgot}>Forgot your password?</p>
                    <p className={styles.register}>Don`n have an account yet? <a>Register</a></p>
                </div>
            </div>
        </main>
    )
}
