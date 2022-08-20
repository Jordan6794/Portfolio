import Link from 'next/link'
import { FunctionComponent } from 'react'

import GithubSvg from '../../public/github.svg'
import LinkedinSvg from '../../public/linkedin.svg'

import styles from './Hero.module.css'

const Hero: FunctionComponent = () => {
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
							<p className={styles.seeWorkText}>See my work</p>
						</Link>
					</div>

					<div className={styles.socialsDiv}>
						<a href="https://github.com/Jordan6794" className={styles.socialLink} target="_blank" rel="noreferrer"><GithubSvg className={styles.socialIcon} /></a>
						<a href="https://www.linkedin.com/in/react-developer-jordan/" className={styles.socialLink} target="_blank" rel="noreferrer"><LinkedinSvg className={styles.socialIcon} /></a>
					</div>
				</div>
				{/* <a className="btn btn-hero" href="#Contact">Contact me</a> */}
			</div>
		</div>
	)
}

export default Hero
