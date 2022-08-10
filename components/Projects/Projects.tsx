import { FunctionComponent } from "react";

import PreviewArea from "./PreviewArea/PreviewArea";

import styles from "./Projects.module.css"

const Projects: FunctionComponent = () => {

    return(
        <section className={styles.section}>
            <div className="container">
                <PreviewArea />
            </div>
        </section>
    )
}

export default Projects