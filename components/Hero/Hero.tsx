import { FunctionComponent } from "react";

import styles from "./Hero.module.css"

const Hero: FunctionComponent = () => {

    return(
        <div className="container">
            <div className={styles.heroDiv}>
                <h1 className={styles.title}>Hi, I am Jordan Acker</h1>
                <h3 className={styles.subtitle}>Fullstack developer specialized in React</h3>
                <p className={styles.subtitle}>I design and build beautiful responsive websites and webapps</p>
                <a className="btn btn-hero" href="#Contact">Contact me</a>
            </div>
        </div>
    )
}

export default Hero