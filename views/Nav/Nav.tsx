import Link from "next/link";
import Image from 'next/image'
import { FunctionComponent } from "react";

import LogoImage from "../../public/logo2.png"
import LogoSVG from "../../public/logo2.svg"

import styles from "./Nav.module.css"
import { useTranslation } from 'next-i18next'


const Nav: FunctionComponent = () => {

    const { t } = useTranslation("common")

    return(
        <div className="wide-container">
            <div className={styles.navDiv}>

                <LogoSVG className={styles.logo} />

                <div className={styles.rightArea}>
                    <div>
                        <Link href="" locale="ja_JP">Japanese</Link>
                        <Link href="" locale="en-US">English</Link>
                    </div>
                    <ul className={styles.navElements}>
                        <Link href='/#projects'><li className={styles.navItem}>Projects</li></Link>
                        <Link href='/#skills'><li className={styles.navItem}>Skills</li></Link>
                        <Link href='/#about'><li className={styles.navItem}>About</li></Link>
                        <Link href='/#contact'><li className='my-btn btn-nav-contact'>{t('contact-me')}</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav