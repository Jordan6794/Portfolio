import { FunctionComponent, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'

import CodeSVG from '../../../public/code_small.svg'
import EyeSVG from '../../../public/eye_small.svg'
import VisitSVG from '../../../public/visit.svg'

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
    const ref = useRef<HTMLAnchorElement>(null)

	//Switching the focus out of the button to prevent a bug where the hover display remains after clicking
	function handleVisitClick(){
		if(ref.current){
			ref.current.focus()
		}
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
				{!isReverseSide && <a href={codeUrl} target="_blank" rel="noreferrer" className="my-btn btn-project-cta btn-ghost">
					<CodeSVG className={`icon-project-btn ${styles.iconMargin}`} /> Code
				</a>}
				<a ref={ref} className="my-btn btn-project-cta" href={websiteUrl} target="_blank" rel="noreferrer">
					<EyeSVG className={`${styles.iconWhite} ${styles.iconMargin}`} /> View live
				</a>
				{isReverseSide && <a href={codeUrl} target="_blank" rel="noreferrer" className="my-btn btn-project-cta btn-ghost">
					<CodeSVG className={`icon-project-btn ${styles.iconMargin}`} /> Code
				</a>}
			</div>
		</div>
	)

	return (<>
	

{/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
    
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
    
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
    
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div> */}


		<div className={`${styles.projectDiv} ${isReverseSide ? styles.reverseProjectDiv : ''}`}>
			{!isReverseSide && infosAreaDisplay}
            <div className={styles.centerContainer}>

                <div className={styles.carouselDivContainer}>
{/* 
					<a href={websiteUrl} onClick={handleVisitClick} target="_blank" rel="noreferrer" className={`btn btn-project-hover ${styles.btnProjectHover}`}>
						<VisitSVG className={`${styles.iconWhite} ${styles.visitIcon} ${styles.iconMargin}`} />
						Visit website
					</a>
                    <div className={styles.pictureDiv}>
                        <Image src={image} alt="project image" layout="fill" />
                    </div> */}
					
					<div id={`carouselProject${number}`} className="carousel carousel-dark slide" data-bs-ride="carousel">
						<div className="carousel-indicators">
							{images.map((_, index) => <button key={index} type="button" data-bs-target={`#carouselProject${number}`} data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index}`}></button>) }
							{/* <button type="button" data-bs-target={`#carouselProject${number}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target={`#carouselProject${number}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target={`#carouselProject${number}`} data-bs-slide-to="2" aria-label="Slide 3"></button> */}
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
	</>
	)
}

export default Project
