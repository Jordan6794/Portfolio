import { FunctionComponent } from "react";

import PreviewArea from "./PreviewArea/PreviewArea";

import styles from "./Projects.module.css"

const Projects: FunctionComponent = () => {

    return(
        <div className="container">
            <PreviewArea />
        </div>
    )
}

export default Projects