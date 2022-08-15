import { FunctionComponent } from "react";

import GitSvg from "../../public/git.svg"
import VercelSvg from "../../public/vercel.svg"
import OauthSvg from "../../public/oauth.svg"
import TypescriptSvg from "../../public/typescript.svg"

import SkillItem from "./SkillItem";

import styles from "./Skills.module.css"

const OtherContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="Typescript" icon={<TypescriptSvg className={styles.devIcon} />} />
            <SkillItem name="Git" icon={<GitSvg className={styles.devIcon} />} />
            <SkillItem name="Vercel" icon={<VercelSvg className={styles.devIcon} />} />
            <SkillItem name="OAuth" icon={<OauthSvg className={styles.devIcon} />} />
            
        </>
    )
}

export default OtherContent