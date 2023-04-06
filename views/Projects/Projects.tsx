import { FunctionComponent } from "react";

import PreviewArea from "./PreviewArea/PreviewArea";
import ProjectsArea from "./ProjectsArea/ProjectsArea";
import { useTranslation } from 'next-i18next'

import styles from "./Projects.module.css"

const Projects: FunctionComponent = () => {

    const { t } = useTranslation("past-works")

    return(
        <section id="projects" className={styles.section}>
            <div className="my-container">
                <div className="container-text-align">
                    <h2 className="section-title no-margin-bottom">{t('title')}</h2>
                </div>
                <PreviewArea />
                <ProjectsArea />
            </div>
        </section>
    )
}

export default Projects