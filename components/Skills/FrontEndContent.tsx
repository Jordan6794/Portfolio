import { FunctionComponent } from "react";

import SkillItem from "./SkillItem";
import ReactSvg from "../../public/react.svg"
import ReduxSvg from "../../public/redux.svg"
import NextSvg from "../../public/next.svg"
import CssSvg from "../../public/css.svg"
import Next2Svg from "../../public/next2.svg"

import styles from "./Skills.module.css"

const FrontEndContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="React" icon={<ReactSvg className={styles.devIcon} />} />
            <SkillItem name="Redux" icon={<ReduxSvg className={styles.devIcon} />} />
            <SkillItem name="Nextjs" icon={<NextSvg className={styles.devIcon} />} /> 
            {/* <SkillItem name="Next2cl" icon={<Next2Svg className={styles.devIcon}/>} /> */}
            <SkillItem name="Responsive Design" icon={<CssSvg className={styles.devIcon} />} />
            
        </>
    )
}

export default FrontEndContent