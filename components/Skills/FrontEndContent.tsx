import { FunctionComponent } from "react";

import SkillItem from "./SkillItem";
import ReactSvg from "../../public/react.svg"
import ReduxSvg from "../../public/redux.svg"
import NextSvg from "../../public/next.svg"
import Next2Svg from "../../public/next2.svg"
import TypescriptSvg from "../../public/typescript.svg"

import styles from "./Skills.module.css"

const FrontEndContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="React" icon={<ReactSvg className={styles.devIcon} />} />
            <SkillItem name="Redux" icon={<ReduxSvg className={styles.devIcon} />} />
            <SkillItem name="Next" icon={<NextSvg className={styles.devIcon} />} /> 
            <SkillItem name="Next2cl" icon={<Next2Svg className={styles.devIcon}/>} />
            <SkillItem name="Typescript" icon={<TypescriptSvg className={styles.devIcon} />} />
            
        </>
    )
}

export default FrontEndContent