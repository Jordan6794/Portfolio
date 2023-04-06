import { FunctionComponent } from "react";

import SkillsType from "./SkillsType";
import FrontEndContent from "./FrontEndContent";
import BackEndContent from "./BackEndContent";
import OtherContent from "./OtherContent";

import CodeSVG from "../../public/code.svg"
import ToolsSVG from "../../public/tools3.svg"
import MonitorSVG from "../../public/monitor2.svg"

import styles from "./Skills.module.css"
import { useTranslation } from "next-i18next";

const Skills: FunctionComponent = () => {

    const { t } = useTranslation("skills")

    return(
        <section id="skills" className={styles.section}>
            <div className="my-container">
                <div className="container-text-align">
                    <h3 className="section-title">{t('title')}</h3>
                </div>
                    <div className={styles.skillsDiv}>
                        <SkillsType title={t('front-end')} icon={<MonitorSVG className={styles.skillTypeIcon}/>}>
                            <FrontEndContent />
                        </SkillsType>
                        <SkillsType title={t('back-end')} icon={<CodeSVG className={styles.skillTypeIcon}/>}>
                            <BackEndContent />
                        </SkillsType>
                        <SkillsType title={t('other')} icon={<ToolsSVG className={styles.skillTypeIcon}/>}>
                            <OtherContent />
                        </SkillsType>
                    </div>
                </div>
        </section>
    )
}

export default Skills