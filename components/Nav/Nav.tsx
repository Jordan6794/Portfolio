import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./Nav.module.css"

const Nav: FunctionComponent = () => {

    return(
        <div className="container">
            <div className={styles.navDiv}>
                <h3>Logo</h3>
                <div className={styles.navElements}>
                    <Link href='/#'>Projects</Link>
                    <Link href='/#'>Skills</Link>
                    <Link href='/#'>About</Link>
                    <Link href='/#'>Contact Me</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav