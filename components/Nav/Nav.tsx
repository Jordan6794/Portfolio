import Link from "next/link";
import Image from 'next/image'
import { FunctionComponent } from "react";

import LogoImage from "../../public/logo2.png"

import styles from "./Nav.module.css"

const Nav: FunctionComponent = () => {

    return(
        <div className="wide-container">
            <div className={styles.navDiv}>
                {/* <h3 className={styles.brand}>Jordan Acker</h3> */}
                <Image src={LogoImage} width={36} height={36} alt="logo" />
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