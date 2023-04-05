import { FunctionComponent } from "react";

import SkillItem from "./SkillItem";

import ReactSvg from "../../public/SVG/react.svg"
import ReduxSvg from "../../public/SVG/redux.svg"
import NextSvg from "../../public/SVG/next.svg"
import CssSvg from "../../public/SVG/css.svg"
import TypescriptSvg from "../../public/SVG/typescript.svg"

import styles from "./Skills.module.css"

const FrontEndContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="Redux" icon={<ReduxSvg className={styles.devIcon} />} />
            <SkillItem name="NextJS" icon={<NextSvg className={styles.devIcon} />} /> 
            <SkillItem name="React" icon={<ReactSvg className={styles.devIcon} />} />
            <SkillItem name="Typescript" icon={<TypescriptSvg className={styles.devIcon} />} />
            <SkillItem name="Responsive Design" icon={<CssSvg className={styles.devIcon} />} />
            
        </>
    )
}

export default FrontEndContent