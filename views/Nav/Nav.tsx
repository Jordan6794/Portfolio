import Link from "next/link";
import Image from 'next/image'
import { FunctionComponent } from "react";

import LogoImage from "../../public/logo2.png"
import LogoSVG from "../../public/logo2.svg"

import styles from "./Nav.module.css"
import { useTranslation } from 'next-i18next'
import ReactCountryFlag from "react-country-flag";


const Nav: FunctionComponent = () => {

    const { t } = useTranslation("hero")
    const { t: tCommon } = useTranslation("common")

    return(
        <div className="wide-container">
            <div className={styles.navDiv}>

                <LogoSVG className={styles.logo} />

                <div className={styles.rightArea}>
                    <div>
                        <Link href="" locale="ja_JP">
                            <ReactCountryFlag
                                countryCode="jp"
                                style={{
                                    lineHeight: '25px',
                                    fontSize: '25px',
                                    marginRight: '20px',
                                    cursor: 'pointer'
                                }}
                                title="Japanese"
                            />
                        </Link>
                        <Link href="" locale="en-US">
                            <ReactCountryFlag
                                countryCode="us"
                                style={{
                                    lineHeight: '25px',
                                    fontSize: '25px',
                                    cursor: 'pointer'
                                }}
                                title="English"
                            />
                        </Link>
                    </div>
                    <ul className={styles.navElements}>
                        <Link href='/#projects'><li className={styles.navItem}>{t('projects')}</li></Link>
                        <Link href='/#skills'><li className={styles.navItem}>{t('skills')}</li></Link>
                        <Link href='/#about'><li className={styles.navItem}>{t('about')}</li></Link>
                        <Link href='/#contact'><li className='my-btn btn-nav-contact'>{tCommon('contact-me')}</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav