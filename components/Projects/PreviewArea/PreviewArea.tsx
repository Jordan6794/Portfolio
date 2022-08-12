import { FunctionComponent } from 'react'
import Image from 'next/image'

import macbook from '../../../public/macbook.png'
import dashboardPic from '../../../public/dashboard.png'
import localhostPic from '../../../public/localhost.png'
import phoneMockup from '../../../public/phone.png'
import localhostPhone from '../../../public/localhost_3000_signup_phone.png'
import habitsChrome from '../../../public/habitsChrome.png'

import styles from '../Projects.module.css'

const PreviewArea: FunctionComponent = () => {
	return (
		<div className={styles.inActionDiv}>
			<div className={styles.laptopDiv}>
				<div className={styles.laptop}>
					<Image src={macbook} alt="habits in action" layout="fill" />
				</div>
				<div className={styles.laptopDivMargin}>
					<div className={`${styles.imgScreenshot} ${styles.img1}`}>
						<Image src={dashboardPic} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshot} ${styles.img2}`}>
						<Image src={localhostPic} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshot} ${styles.img3}`}>
						<Image src={habitsChrome} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.phoneMockup}`}>
						<Image src={phoneMockup} alt="phone mockup" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img1}`}>
						<Image src={dashboardPic} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img2}`}>
						<Image src={localhostPhone} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img3}`}>
						<Image src={habitsChrome} alt="habits in action" layout="fill" />
					</div>
				</div>
			</div>

			<div className={styles.sliderProjectNameDiv}>
				<p className={styles.habitTitle}>Habits 30</p>
				<p className={styles.TicketTitle}>Team Ticket</p>
			</div>
		</div>
	)
}

export default PreviewArea
