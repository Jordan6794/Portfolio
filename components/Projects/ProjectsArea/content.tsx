import ScreenHabitsLanding from '../../../public/screenshots/screen_habits_landing.png'
import ScreenTTDashboard from '../../../public/screenshots/screen_TT_dashboard.png'

import styles from "./ProjectsArea.module.css"

export const project1 = {
    title: "Habits30",
    subtitle: "Web Application · With few users",
}
export const project1Text = 
<p className={styles.text}>
    Habits30 is a full stack web application, the app is designed to help building and maintaining new habits.<br /> 
    Users can also see their successes and failures on a dashboard that displays all of their data&apos;s statistics.<br /> 
    The website comes with an appealing landing page to attract new users, as well as a demo account to try all of the features.
</p>
export const project1Technologies = ["React", "Redux", "MongoDB", "Node", "Express", "Typescript", "Oauth", "JWT"]
export const project1Image = ScreenHabitsLanding
export const project1WebsiteUrl = "https://www.habits30.net"
export const project1CodeUrl = "https://github.com/Jordan6794/Habits30"

export const project2 = {
    title: "Team Ticket",
    subtitle: "Web Application · Portfolio project",
}
export const project2Text = 
<p className={styles.text}>
    Team Ticket is a full stack web application, it is a bug tracker to manage tickets within a team.<br /> 
    There is a variety of features including creating, managing, and viewing tickets, a dashboard page with statistics about the tickets, as well as a history page, and more. <br />  
    I made the front-end with Nextjs, using Redux for state management, and for the back-end I&apos;m using Firebase.<br /> 
</p>
export const project2Technologies = ["Nextjs", "React", "Redux", "Firebase", "Typescript"]
export const project2Image = ScreenTTDashboard
export const project2WebsiteUrl = "https://teamticket.vercel.app"
export const project2CodeUrl = "https://github.com/Jordan6794/Ticket-tracker"