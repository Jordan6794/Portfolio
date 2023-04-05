import { FunctionComponent } from "react";

import styles from "./Skills.module.css"

const SkillItem: FunctionComponent<{name: string, icon: any}> = ({name, icon}) => {

    return(
        <div className={styles.skillItemDiv}>
            {icon}
            <p className={styles.skillName}>{name}</p>
        </div>
    )
}

export default SkillItem