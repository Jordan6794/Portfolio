import { FunctionComponent } from "react";

import GitSvg from "../../public/SVG/git.svg"
import VercelSvg from "../../public/SVG/vercel.svg"
import OauthSvg from "../../public/SVG/oauth.svg"
import JwtSvg from "../../public/SVG/jwt_logo.svg"

import SkillItem from "./SkillItem";

import styles from "./Skills.module.css"

const OtherContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="Json Web Token" icon={<JwtSvg className={styles.devIcon} />} />
            <SkillItem name="Git" icon={<GitSvg className={styles.devIcon} />} />
            <SkillItem name="Vercel" icon={<VercelSvg className={styles.devIcon} />} />
            <SkillItem name="OAuth" icon={<OauthSvg className={styles.devIcon} />} />
            
        </>
    )
}

export default OtherContent