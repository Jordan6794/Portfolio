import { FunctionComponent } from "react";

import SkillsType from "./SkillsType";
import FrontEndContent from "./FrontEndContent";
import BackEndContent from "./BackEndContent";
import OtherContent from "./OtherContent";

import CodeSVG from "../../public/code.svg"
import DatabaseSVG from "../../public/database.svg"

import styles from "./Skills.module.css"

const Skills: FunctionComponent = () => {

    return(
        <section className={styles.section}>
            <div className="container">
                <h3 className={styles.sectionTitle}>My Skills</h3>
                    <div className={styles.skillsDiv}>
                        <SkillsType title="Front End" icon={<CodeSVG className={styles.skillTypeIcon}/>}>
                            <FrontEndContent />
                        </SkillsType>
                        <SkillsType title="Back End" icon={<DatabaseSVG className={styles.skillTypeIcon}/>}>
                            <BackEndContent />
                        </SkillsType>
                        <SkillsType title="Other" icon={<CodeSVG className={styles.skillTypeIcon}/>}>
                            <OtherContent />
                        </SkillsType>
                    </div>
                </div>
        </section>
    )
}

export default Skills