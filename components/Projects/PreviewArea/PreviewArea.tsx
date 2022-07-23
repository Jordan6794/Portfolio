import { FunctionComponent } from 'react'
import Image from 'next/image'

import dashboardPic from '../../../public/dashboard.png'
import localhostPic from '../../../public/localhost.png'
import phoneMockup from '../../../public/phone.png'
import localhostPhone from '../../../public/localhost_3000_signup_phone.png'

import styles from '../Projects.module.css'

const PreviewArea: FunctionComponent = () => {
	return (
		<div className={styles.inActionDiv}>
			<h1>My past works :</h1>
			<div className={styles.laptopDiv}>
				<div className={styles.laptopDivMargin}>
					<div className={`${styles.imgScreenshot} ${styles.img1}`}>
						<Image src={dashboardPic} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshot} ${styles.img2}`}>
						<Image src={localhostPic} alt="habits in action" layout="fill" />
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
				</div>
			</div>
		</div>
	)
}

export default PreviewArea
