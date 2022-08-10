import { FunctionComponent } from "react";

import GitSvg from "../../public/git.svg"
import GithubSvg from "../../public/github.svg"
import CssSvg from "../../public/css.svg"
import VercelSvg from "../../public/vercel.svg"
import OauthSvg from "../../public/oauth.svg"

import SkillItem from "./SkillItem";

import styles from "./Skills.module.css"

const OtherContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="Git" icon={<GitSvg className={styles.devIcon} />} />
            <SkillItem name="Github" icon={<GithubSvg className={styles.devIcon} />} />
            <SkillItem name="Responsive Design" icon={<CssSvg className={styles.devIcon} />} />
            <SkillItem name="Vercel" icon={<VercelSvg className={styles.devIcon} />} />
            <SkillItem name="OAuth" icon={<OauthSvg className={styles.devIcon} />} />
            
        </>
    )
}

export default OtherContent