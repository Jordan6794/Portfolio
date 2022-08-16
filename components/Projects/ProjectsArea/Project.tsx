import { FunctionComponent } from 'react'
import Image, { StaticImageData } from 'next/image'

import CodeSVG from '../../../public/code_small.svg'
import EyeSVG from '../../../public/eye_small.svg'
import VisitSVG from '../../../public/visit.svg'

import styles from './ProjectsArea.module.css'

const Project: FunctionComponent<{
	title: string
	subtitle: string
	text: JSX.Element
	technologies: string[]
	isReverseSide: boolean
    image: StaticImageData
	codeUrl: string
	websiteUrl: string
}> = ({ title, subtitle, text, technologies, isReverseSide, image, codeUrl, websiteUrl }) => {
    
	const infosAreaDisplay = (
		<div className={`${styles.infosArea} ${isReverseSide ? styles.reverseInfosArea : ''}`}>
			<h2 className={styles.title}>{title}</h2>
			<h5 className={styles.subtitle}>{subtitle}</h5>
			{text}
			<h5 className={styles.technologiesTitle}>Technologies</h5>
			<div className={`${styles.technologiesDiv} ${isReverseSide ? styles.reverseTechnologiesDiv : ''}`}>
				{technologies.map((tech, i) => (
					<div className="btn btn-tech-item" key={i}>
						{tech}
					</div>
				))}
			</div>
			<div className={`${styles.buttonsDiv} ${isReverseSide ? styles.reverseButtonsDiv : ''}`}>
				{!isReverseSide && <a href={codeUrl} target="_blank" rel="noreferrer" className="btn btn-project-cta btn-ghost">
					<CodeSVG className={`icon-project-btn ${styles.iconMargin}`} /> Code
				</a>}
				<a className="btn btn-project-cta" href={websiteUrl} target="_blank" rel="noreferrer">
					<EyeSVG className={`${styles.iconWhite} ${styles.iconMargin}`} /> View live
				</a>
				{isReverseSide && <a href={codeUrl} target="_blank" rel="noreferrer" className="btn btn-project-cta btn-ghost">
					<CodeSVG className={`icon-project-btn ${styles.iconMargin}`} /> Code
				</a>}
			</div>
		</div>
	)

	return (
		<div className={`${styles.projectDiv} ${isReverseSide ? styles.reverseProjectDiv : ''}`}>
			{!isReverseSide && infosAreaDisplay}
            <div className={styles.centerContainer}>
                <div className={styles.pictureDivContainer}>
					<a href={websiteUrl} target="_blank" rel="noreferrer" className={`btn btn-project-hover ${styles.btnProjectHover}`}>
						<VisitSVG className={`${styles.iconWhite} ${styles.visitIcon} ${styles.iconMargin}`} />
						Visit website
					</a>
                    <div className={styles.pictureDiv}>
                        <Image src={image} alt="project image" layout="fill" />
                    </div>
                </div>
            </div>
            {isReverseSide && infosAreaDisplay}
		</div>
	)
}

export default Project
