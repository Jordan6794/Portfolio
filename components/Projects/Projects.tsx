import { FunctionComponent } from "react";

import PreviewArea from "./PreviewArea/PreviewArea";

import styles from "./Projects.module.css"

const Projects: FunctionComponent = () => {

    return(
        <section id="projects" className={styles.section}>
            <div className="container">
                <div className="container-text-align">
                    <h2 className="section-title">My past work</h2>
                </div>
                <PreviewArea />
            </div>
        </section>
    )
}

export default Projects