import Link from 'next/link'
import { FunctionComponent } from 'react'

import GithubSvg from '../../public/github.svg'
import LinkedinSvg from '../../public/linkedin.svg'
import { callHTTPCustomeEvent } from '../../utils/googleAPI.service'

import styles from './Hero.module.css'

const Hero: FunctionComponent = () => {

	function sendClickEvent(eventName: string){
		callHTTPCustomeEvent(eventName)
	}

	return (
		<div className="wide-container">
			<div className={styles.heroDiv}>
				<div></div>
				<h1 className={styles.title}>
					Jordan Acker <br />
					<span className="emphasis">Full Stack</span> developer
					<br />
					Specialized in <span className="emphasis">React</span>
				</h1>
				<div className={styles.bottomDiv}>
					<div className={styles.seeWorkDiv}>
						<span className={styles.line}></span>
						<Link href="/#projects">
							<p onClick={() => sendClickEvent('clicked_see_my_work')} className={styles.seeWorkText}>See my work</p>
						</Link>
					</div>

					<div className={styles.socialsDiv}>
						<a href="https://github.com/Jordan6794" onClick={() => sendClickEvent('clicked_github_hero')} className={styles.socialLink} target="_blank" rel="noreferrer"><GithubSvg className={styles.socialIcon} /></a>
						<a href="https://www.linkedin.com/in/react-developer-jordan/" onClick={() => sendClickEvent('clicked_linkedin_hero')} className={styles.socialLink} target="_blank" rel="noreferrer"><LinkedinSvg className={styles.socialIcon} /></a>
					</div>
				</div>
				{/* <a className="my-btn btn-hero" href="#Contact">Contact me</a> */}
			</div>
		</div>
	)
}

export default Hero
