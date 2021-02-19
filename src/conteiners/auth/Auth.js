import React from 'react'
import styles from './auth.module.css'
import img from '../../img/salyDesktop.svg'

export const Auth = () => {
    return (
        <main>
            <div className={styles.imgWrapper}><img src={img} alt=""/></div>
            <div className={styles.card}>
                <p className={styles.title}>login</p>
                <form className={styles.form}>
                    <input type="text"/>
                    <input type="text"/>
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
