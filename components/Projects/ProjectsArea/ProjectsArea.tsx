import { FunctionComponent } from "react";

import Project from "./Project";
import { project1, project1Text, project1Technologies, project1Image, project1WebsiteUrl, project1CodeUrl, project2, project2Text, project2Technologies, project2Image, project2WebsiteUrl, project2CodeUrl } from "./content"

import styles from "./ProjectsArea.module.css"

const ProjectsArea: FunctionComponent = () => {

    return(
        <>
            <div className="container">
                <Project title={project1.title} subtitle={project1.subtitle} text={project1Text} technologies={project1Technologies} image={project1Image} websiteUrl={project1WebsiteUrl} codeUrl={project1CodeUrl} isReverseSide={false}/>
                <Project title={project2.title} subtitle={project2.subtitle} text={project2Text} technologies={project2Technologies} image={project2Image} websiteUrl={project2WebsiteUrl} codeUrl={project2CodeUrl} isReverseSide={true}/>

            </div>
        </>
    )
}

export default ProjectsArea