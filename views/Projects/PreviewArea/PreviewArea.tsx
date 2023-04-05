import { FunctionComponent } from 'react'
import Image from 'next/image'

import macbook from '../../../public/mockups/macbook.png'
import phoneMockup from '../../../public/mockups/phone.png'
import phoneStatusBarMockup from '../../../public/mockups/phone-status-bar.jpg'

import ScreenHabitsLanding from '../../../public/screenshots/screen_habits_landing.png'
import ScreenHabitsLogin from '../../../public/screenshots/screen_habits_login.png'
import ScreenHabitsDashboard from '../../../public/screenshots/screen_habits_dashboard.png'
import ScreenTTDashboard from '../../../public/screenshots/screen_TT_dashboard.png'
import ScreenTTFeed from '../../../public/screenshots/screen_TT_feed.png'
import ScreenTTTicket from '../../../public/screenshots/screen_TT_ticket.png'

import ScreenHabitsLandingPhone from '../../../public/screenshots/screen_habits_landing_phone.png'
import ScreenHabitsLoginPhone from '../../../public/screenshots/screen_habits_login_phone.png'
import ScreenHabitsDashboardPhone from '../../../public/screenshots/screen_habits_dashboard_phone.png'
import ScreenTTDashboardPhone from '../../../public/screenshots/screen_TT_dashboard_phone.png'
import ScreenTTFeedPhone from '../../../public/screenshots/screen_TT_feed_phone.png'
import ScreenTTTicketPhone from '../../../public/screenshots/screen_TT_ticket_phone.png'

import styles from './PreviewArea.module.css'

const PreviewArea: FunctionComponent = () => {
	return (
		<div className={styles.inActionDiv}>
			<div className={styles.laptopDiv}>
				<div className={styles.laptop}>
					<Image src={macbook} alt="habits in action" layout="fill" />
				</div>
				<div className={styles.laptopDivMargin}>
					{/* Laptop images */}
					<div className={`${styles.imgScreenshot} ${styles.img1}`}>
						<Image src={ScreenTTTicket} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshot} ${styles.img2}`}>
						<Image src={ScreenTTFeed} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshot} ${styles.img3}`}>
						<Image src={ScreenTTDashboard} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshot} ${styles.img4}`}>
						<Image src={ScreenHabitsDashboard} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshot} ${styles.img5}`}>
						<Image src={ScreenHabitsLogin} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshot} ${styles.img6}`}>
						<Image src={ScreenHabitsLanding} alt="habits in action" layout="fill" />
					</div>

					{/* Phone Images */}
					<div className={`${styles.phoneMockup}`}>
						<Image src={phoneMockup} alt="phone mockup" layout="fill" />
					</div>
					<div className={`${styles.phoneStatusBarMockup}`}>
						<Image src={phoneStatusBarMockup} alt="phone mockup" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img1}`}>
						<Image src={ScreenTTTicketPhone} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img2}`}>
						<Image src={ScreenTTFeedPhone} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img3}`}>
						<Image src={ScreenTTDashboardPhone} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img4}`}>
						<Image src={ScreenHabitsDashboardPhone} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img5}`}>
						<Image src={ScreenHabitsLoginPhone} alt="habits in action" layout="fill" />
					</div>
					<div className={`${styles.imgScreenshotPhone} ${styles.img6}`}>
						<Image src={ScreenHabitsLandingPhone} alt="habits in action" layout="fill" />
					</div>
				</div>
			</div>

			<div className={styles.sliderProjectNameDiv}>
				<p className={styles.habitTitle}>Habits30</p>
				<p className={styles.TicketTitle}>Team Ticket</p>
			</div>
		</div>
	)
}

export default PreviewArea
