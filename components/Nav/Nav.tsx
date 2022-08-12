import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./Nav.module.css"

const Nav: FunctionComponent = () => {

    return(
        <div className="wide-container">
            <div className={styles.navDiv}>
                <h3>Logo</h3>
                <ul className={styles.navElements}>
                    <Link href='/#projects'><li className={styles.navItem}>Projects</li></Link>
                    <Link href='/#skills'><li className={styles.navItem}>Skills</li></Link>
                    <Link href='/#about'><li className={styles.navItem}>About</li></Link>
                    <Link href='/#contact'><li className='btn btn-nav-contact'>Contact me</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav