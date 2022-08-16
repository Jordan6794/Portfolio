import { FunctionComponent } from "react";

import SkillsType from "./SkillsType";
import FrontEndContent from "./FrontEndContent";
import BackEndContent from "./BackEndContent";
import OtherContent from "./OtherContent";

import CodeSVG from "../../public/code.svg"
import ToolsSVG from "../../public/tools3.svg"
import MonitorSVG from "../../public/monitor2.svg"

import styles from "./Skills.module.css"

const Skills: FunctionComponent = () => {

    return(
        <section id="skills" className={styles.section}>
            <div className="container">
                <div className="container-text-align">
                    <h3 className="section-title">My Skills</h3>
                </div>
                    <div className={styles.skillsDiv}>
                        <SkillsType title="Front End" icon={<MonitorSVG className={styles.skillTypeIcon}/>}>
                            <FrontEndContent />
                        </SkillsType>
                        <SkillsType title="Back End" icon={<CodeSVG className={styles.skillTypeIcon}/>}>
                            <BackEndContent />
                        </SkillsType>
                        <SkillsType title="Other" icon={<ToolsSVG className={styles.skillTypeIcon}/>}>
                            <OtherContent />
                        </SkillsType>
                    </div>
                </div>
        </section>
    )
}

export default Skills