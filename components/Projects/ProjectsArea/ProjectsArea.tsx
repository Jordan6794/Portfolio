import { FunctionComponent } from "react";

import Project from "./Project";
import { project1, project1Text, project1Technologies, project1Images, project1WebsiteUrl, project1CodeUrl, project2, project2Text, project2Technologies, project2Images, project2WebsiteUrl, project2CodeUrl } from "./content"

import styles from "./ProjectsArea.module.css"

const ProjectsArea: FunctionComponent = () => {

    return(
        <>
                <Project number={1} title={project1.title} subtitle={project1.subtitle} text={project1Text} technologies={project1Technologies} images={project1Images} websiteUrl={project1WebsiteUrl} codeUrl={project1CodeUrl} isReverseSide={false}/>
                <Project number={2} title={project2.title} subtitle={project2.subtitle} text={project2Text} technologies={project2Technologies} images={project2Images} websiteUrl={project2WebsiteUrl} codeUrl={project2CodeUrl} isReverseSide={true}/>

        </>
    )
}

export default ProjectsArea