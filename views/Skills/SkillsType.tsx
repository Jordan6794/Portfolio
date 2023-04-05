import { FunctionComponent } from "react";

import styles from "./Skills.module.css"

const SkillsType: FunctionComponent<{title: string, icon: any, content?: any, children: any}> = (props) => {

    return(
        <div className={styles.skillTypeDiv}>
            {props.icon}
            <h3 className={styles.skillTypeTitle}>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default SkillsType