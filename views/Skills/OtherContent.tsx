import { FunctionComponent } from "react";

import GitSvg from "../../public/SVG/git.svg"
import ScrumSvg from "../../public/SVG/scrum.svg"
import OauthSvg from "../../public/SVG/oauth.svg"
import AwsSvg from "../../public/SVG/aws.svg"
import JwtSvg from "../../public/SVG/jwt_logo.svg"
import JestSvg from "../../public/SVG/jest.svg"

import SkillItem from "./SkillItem";

import styles from "./Skills.module.css"

const OtherContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="AWS" icon={<AwsSvg className={styles.devIcon} />} />
            <SkillItem name="Agile" icon={<ScrumSvg className={styles.devIcon} />} />
            <SkillItem name="Jest" icon={<JestSvg className={styles.devIcon} />} />
            <SkillItem name="Git" icon={<GitSvg className={styles.devIcon} />} />
            <SkillItem name="Json Web Token" icon={<JwtSvg className={styles.devIcon} />} />
            <SkillItem name="OAuth" icon={<OauthSvg className={styles.devIcon} />} />
        </>
    )
}

export default OtherContent