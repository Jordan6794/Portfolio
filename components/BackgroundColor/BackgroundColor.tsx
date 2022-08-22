import { FunctionComponent } from "react";

import styles from "./BackgroundColor.module.css"

const BackgroundColor: FunctionComponent = () => {

    return(
        <section className={`background-color-white ${styles.section}`}>
        </section>
    )
}

export default BackgroundColor