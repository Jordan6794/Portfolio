import { FunctionComponent } from "react";

import styles from "./BackgroundColor.module.css"

const BackgroundColor: FunctionComponent = () => {

    return(
        <section className={`background-color ${styles.section}`}>
        </section>
    )
}

export default BackgroundColor