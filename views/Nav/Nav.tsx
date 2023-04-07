import Link from "next/link";
import { FunctionComponent } from "react";

import LogoSVG from "../../public/logo2.svg"

import styles from "./Nav.module.css"
import { useTranslation } from 'next-i18next'
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/router";


const Nav: FunctionComponent = () => {

    const { t } = useTranslation("hero")
    const { t: tCommon } = useTranslation("common")

    const router = useRouter()
    const { locale } = router

    return(
        <div className="wide-container">
            <div className={styles.navDiv}>

                <LogoSVG className={styles.logo} />

                <div className={styles.flexCenter}>
                    <div className={styles.flexCenter}>
                        <Link href="" locale="ja_JP">
                            <div className={locale === "ja_JP" ? styles.activeFlag : ''} style={{marginRight: '20px'}}>
                                <ReactCountryFlag
                                    countryCode="jp"
                                    style={{
                                        lineHeight: '25px',
                                        fontSize: '25px',
                                        cursor: 'pointer'
                                    }}
                                    title="Japanese"
                                />
                            </div> 
                        </Link>
                        <Link href="" locale="en-US">
                            <div className={locale === "en-US" ? styles.activeFlag : ''}>
                                <ReactCountryFlag
                                    countryCode="us"
                                    style={{
                                        lineHeight: '25px',
                                        fontSize: '25px',
                                        cursor: 'pointer'
                                    }}
                                    title="English"
                                />
                            </div>
                        </Link>
                    </div>
                    <ul className={styles.flexCenter}>
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