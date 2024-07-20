import { FunctionComponent } from "react";

import Project from "./Project";
import { project1Technologies, project1Images, project1WebsiteUrl, project1CodeUrl, project2Technologies, project2Images, project2WebsiteUrl, project2CodeUrl } from "./content"

import styles from "./ProjectsArea.module.css"
import { useTranslation } from "next-i18next";

const ProjectsArea: FunctionComponent = () => {

    const { t } = useTranslation("project")

    const titleOne = t('title 1')
    const subtitleOne = t('subtitle 1')
    const projectOneText = 
        <p className={styles.text}>
            {t('project 1 line 1')}<br /> 
            {t('project 1 line 2')}<br />
            {t('project 1 line 3')}<br />
            {t('project 1 line 4')}<br />
            {t('project 1 line 5')}
        </p>

    const titleTwo = t('title 2')
    const subtitleTwo = t('subtitle 2')
    const projectTwoText = 
        <p className={styles.text}>
            {t('project 2 line 1')}<br /> 
            {t('project 2 line 2')}<br />  
            {t('project 2 line 3')}<br /> 
        </p>

    return(
        <>
                <Project number={1} title={titleOne} subtitle={subtitleOne} text={projectOneText} technologies={project1Technologies} images={project1Images} websiteUrl={project1WebsiteUrl} codeUrl={project1CodeUrl} isReverseSide={false}/>
                <Project number={2} title={titleTwo} subtitle={subtitleTwo} text={projectTwoText} technologies={project2Technologies} images={project2Images} websiteUrl={project2WebsiteUrl} codeUrl={project2CodeUrl} isReverseSide={true}/>

        </>
    )
}

export default ProjectsArea