import { FunctionComponent } from "react";

import NodeSvg from "../../public/node.svg"
import ExpressSvg from "../../public/express.svg"
import MongoSvg from "../../public/mongo.svg"
import FirebaseSvg from "../../public/firebase.svg"
import JwtSvg from "../../public/jwt_logo.svg"
import SkillItem from "./SkillItem";

import styles from "./Skills.module.css"

const BackEndContent: FunctionComponent = () => {

    return(
        <>
            <SkillItem name="Node" icon={<NodeSvg className={styles.devIcon} />} />
            <SkillItem name="Express" icon={<ExpressSvg className={styles.devIcon} />} />
            <SkillItem name="MongoDB" icon={<MongoSvg className={styles.devIcon} />} />
            <SkillItem name="Firebase" icon={<FirebaseSvg className={styles.devIcon} />} />
            <SkillItem name="Json Web Token" icon={<JwtSvg className={styles.devIcon} />} />
        </>
    )
}

export default BackEndContent