import { FunctionComponent } from "react";

import NodeSvg from "../../public/SVG/node.svg"
import ExpressSvg from "../../public/SVG/express.svg"
import MongoSvg from "../../public/SVG/mongo.svg"
import FirebaseSvg from "../../public/SVG/firebase.svg"
import RestSvg from "../../public/SVG/rest-api-icon.svg"

import SkillItem from "./SkillItem";

import styles from "./Skills.module.css"

const BackEndContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="Node" icon={<NodeSvg className={styles.devIcon} />} />
            <SkillItem name="Express" icon={<ExpressSvg className={styles.devIcon} />} />
            <SkillItem name="MongoDB" icon={<MongoSvg className={styles.devIcon} />} />
            <SkillItem name="Firebase" icon={<FirebaseSvg className={styles.devIcon} />} />
            <SkillItem name="REST API" icon={<RestSvg className={styles.devIcon} />} />
        </>
    )
}

export default BackEndContent