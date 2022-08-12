import { FunctionComponent } from "react";
import Image from 'next/image'

import MeImage from "../../public/me.jpg"

import styles from "./About.module.css"

const About: FunctionComponent = () => {

    return(
        <section id="about" className={styles.section}>
            <div className="container">
                <div className="container-text-align">
                    <h3 className="section-title">About me</h3>
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.textArea}>
                        <div>
                            <h3 className={styles.textTitle}>I am <span className="emphasis">Jordan Acker</span>, a fullstack developer</h3>
                            <p className={styles.aboutText}>I am a <span className="emphasis">full stack</span> web developer with a strong proficiency using <span className="emphasis">React.</span><br />
                                I build elegant and performant web solutions from full stack applications to world-class business websites. <br />
                                As far as the back-end, I am familliar with the <span className="emphasis">MERN</span> stack as well as <span className="emphasis">firebase</span><br />
                                I also love creating simple yet artistic <span className="emphasis">UI designs.</span>
                            </p>
                            <button className="btn btn-big">My Resume</button>
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