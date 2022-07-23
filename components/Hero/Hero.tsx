import { FunctionComponent } from "react";

import styles from "./Hero.module.css"

const Hero: FunctionComponent = () => {

    return(
        <div className="container">
            <div className={styles.heroDiv}>
                <h3 className={styles.title}>Fullstack developer specialized in React</h3>
                <p className={styles.subtitle}>I design and build beautiful responsive websites and webapps</p>
                <a className="btn btn-hero" href="#Contact">Contact me</a>
            </div>
        </div>
    )
}

export default Hero