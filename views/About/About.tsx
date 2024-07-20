import { FunctionComponent } from "react";
import Image from 'next/image'

// import MeImage from "../../public/me.jpg"
import MeImage from "../../public/me_crop.jpg"

import styles from "./About.module.css"
import { callHTTPCustomeEvent } from "../../utils/googleAPI.service";
import { useTranslation } from "next-i18next";

const About: FunctionComponent = () => {
    
    function sendClickEvent(eventName: string){
		callHTTPCustomeEvent(eventName)
	}

    const { t } = useTranslation('about')

    return(
        <section id="about" className={styles.section}>
            <div className="my-container">
                <div className="container-text-align">
                    <h3 className="section-title">{t('title')}</h3>
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.textArea}>
                        <div>
                            <h3 className={styles.textTitle}>{t('subtitle p1')}<span className="emphasis">{t('subtitle emphasis')}</span>{t('subtitle p2')}</h3>
                            <p className={styles.aboutText}>{t('line 1 p1')}<span className="emphasis">{t('line 1 emphasis1')}</span>{t('line 1 p2')}<span className="emphasis">{t('line 1 emphasis2')}</span>{t('line 1 p3')}<br />
                                {t('line 2 p1')}<span className="emphasis">{t('line 2 emphasis')}</span>{t('line 2 p2')}<br />
                                {t('line 3 p1')}<span className="emphasis">{t('line 3 emphasis1')}</span>{t('line 3 p2')}<span className="emphasis">{t('line 3 emphasis2')}</span>{t('line 3 p3')}<span className="emphasis">{t('line 3 emphasis3')}</span>{t('line 3 p4')}<br />
                                {t('line 4 p1')}<span className="emphasis">{t('line 4 emphasis')}</span>{t('line 4 p2')}<br />
                                {t('line 5 p1')}<span className="emphasis">{t('line 5 emphasis')}</span>{t('line 5 p2')}
                            </p>
                            <a className="my-btn btn-big btn-resume" href="/files/Jordan_Acker_Resume.pdf" onClick={() => sendClickEvent('click_resume')} target="_blank" rel="noreferrer">{t('my resume')}</a>
                        </div>
                    </div>
                    <div className={styles.pictureArea}>
                        <div className={styles.pictureDiv}>
                            <Image src={MeImage} alt="portrait of me" layout='fill' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About