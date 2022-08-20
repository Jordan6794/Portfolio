import { FunctionComponent } from "react";

import GithubSvg from '../../public/github.svg'
import LinkedinSvg from '../../public/linkedin.svg'

import styles from "./Footer.module.css"

const Footer: FunctionComponent = () => {

    return(
        <section>
            <div className="container">
                <footer className={styles.footer}>
                    <p>2022 Jordan Acker. All rights reserved.</p>
                    <div className={styles.socialsDiv}>
						<a href="https://github.com/Jordan6794" className={styles.socialLink} target="_blank" rel="noreferrer"><GithubSvg className={styles.socialIcon} /></a>
						<a href="https://www.linkedin.com/in/react-developer-jordan/" className={styles.socialLink} target="_blank" rel="noreferrer"><LinkedinSvg className={styles.socialIcon} /></a>
					</div>
                </footer>
            </div>
        </section>
    )
}

export default Footer