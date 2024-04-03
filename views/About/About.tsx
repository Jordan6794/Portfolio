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
                            <h3 className={styles.textTitle}>I am <span className="emphasis">Jordan Acker</span>, a full stack developer</h3>
                            <p className={styles.aboutText}>I am a <span className="emphasis">full stack</span> web developer with a strong proficiency in <span className="emphasis">React.</span><br />
                                I build qualitative <span className="emphasis">responsive</span> websites, clean user interfaces and rich interactive web applications. <br />
                                In regards to the back-end, I am proficient with <span className="emphasis">AWS</span>, the <span className="emphasis">MERN</span> stack as well as <span className="emphasis">firebase.</span><br />
                                I also love creating simple yet artistic <span className="emphasis">UI designs.</span> <br />
                                I&apos;ve always had a <span className="emphasis">problem-solving</span> mind, and I would say a quite friendly personality!
                            </p>
                            <a className="my-btn btn-big btn-resume" href="/files/Jordan_Acker_Resume.pdf" onClick={() => sendClickEvent('click_resume')} target="_blank" rel="noreferrer">My Resume</a>
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