import { FunctionComponent } from "react";

import PreviewArea from "./PreviewArea/PreviewArea";
import ProjectsArea from "./ProjectsArea/ProjectsArea";

import styles from "./Projects.module.css"

const Projects: FunctionComponent = () => {

    return(
        <section id="projects" className={styles.section}>
            <div className="my-container">
                <div className="container-text-align">
                    <h2 className="section-title no-margin-bottom">Past works</h2>
                </div>
                <PreviewArea />
                <ProjectsArea />
            </div>
        </section>
    )
}

export default Projects