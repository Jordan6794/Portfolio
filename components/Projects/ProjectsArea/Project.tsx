import { FunctionComponent } from 'react'

import CodeSVG from '../../../public/code_small.svg'
import EyeSVG from '../../../public/eye_small.svg'
import { callHTTPCustomeEvent } from '../../../utils/googleAPI.service'

import styles from './ProjectsArea.module.css'

const Project: FunctionComponent<{
	number: number
	title: string
	subtitle: string
	text: JSX.Element
	technologies: string[]
	isReverseSide: boolean
    images: string[]
	codeUrl: string
	websiteUrl: string
}> = ({ number, title, subtitle, text, technologies, isReverseSide, images, codeUrl, websiteUrl }) => {

	function sendClickEvent(eventName: string){
		callHTTPCustomeEvent(eventName)
	}

	const infosAreaDisplay = (
		<div className={`${styles.infosArea} ${isReverseSide ? styles.reverseInfosArea : ''}`}>
			<h2 className={styles.title}>{title}</h2>
			<h5 className={styles.subtitle}>{subtitle}</h5>
			{text}
			<h5 className={styles.technologiesTitle}>Technologies</h5>
			<div className={`${styles.technologiesDiv} ${isReverseSide ? styles.reverseTechnologiesDiv : ''}`}>
				{technologies.map((tech, i) => (
					<div className="my-btn btn-tech-item" key={i}>
						{tech}
					</div>
				))}
			</div>
			<div className={`${styles.buttonsDiv} ${isReverseSide ? styles.reverseButtonsDiv : ''}`}>
				{!isReverseSide && <a href={codeUrl} onClick={() => sendClickEvent(`click_code_project${number}`)} target="_blank" rel="noreferrer" className="my-btn btn-project-cta btn-ghost">
					<CodeSVG className={`icon-project-btn ${styles.iconMargin}`} /> Code
				</a>}
				<a className="my-btn btn-project-cta" href={websiteUrl} onClick={() => sendClickEvent(`click_live_project${number}`)} target="_blank" rel="noreferrer">
					<EyeSVG className={`${styles.iconWhite} ${styles.iconMargin}`} /> View live
				</a>
				{isReverseSide && <a href={codeUrl} onClick={() => sendClickEvent(`click_code_project${number}`)} target="_blank" rel="noreferrer" className="my-btn btn-project-cta btn-ghost">
					<CodeSVG className={`icon-project-btn ${styles.iconMargin}`} /> Code
				</a>}
			</div>
		</div>
	)

	return (
		<div className={`${styles.projectDiv} ${isReverseSide ? styles.reverseProjectDiv : ''}`}>
			{!isReverseSide && infosAreaDisplay}
            <div className={styles.centerContainer}>

                <div className={styles.carouselDivContainer}>
					
					<div id={`carouselProject${number}`} className="carousel carousel-dark slide" data-bs-ride="carousel">
						<div className="carousel-indicators">
							{images.map((_, index) => <button key={index} type="button" data-bs-target={`#carouselProject${number}`} data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index}`}></button>) }
						</div>
						<div className="carousel-inner">

							{images.map((image, index) =>  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
								<img src={image} className="d-block w-100" alt="..." />
							</div>
							)}

						</div>
						<button className="carousel-control-prev" type="button" data-bs-target={`#carouselProject${number}`} data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target={`#carouselProject${number}`} data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>

                </div>
            </div>
            {isReverseSide && infosAreaDisplay}
		</div>
	)
}

export default Project
