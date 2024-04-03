import ScreenHabitsLanding from '../../../public/screenshots/screen_habits_landing.png'
import ScreenTTDashboard from '../../../public/screenshots/screen_TT_dashboard.png'

import styles from "./ProjectsArea.module.css"

export const project1 = {
    title: "Habits30",
    subtitle: "Web Application · With active users",
}
export const project1Text = 
<p className={styles.text}>
    Habits30 is a full stack web application, designed to help building and maintaining new habits.<br /> 
    It is written with clean and testable code, with Unit Testing implemented with Jest. <br />
    An onboarding process is there in order to help new users to get familiar with the features. And Sign In with Google is available as well. <br />
    The website comes with an appealing landing page to attract new users, as well as a demo account to try all of the features. <br />
    Users can also see their successes and failures on a dashboard that displays all of their data&apos;s statistics.
</p>
export const project1Technologies = ["React", "Redux", "MongoDB", "Node", "Express", "Jest", "Typescript", "OAuth", "JWT", "REST API", "Axios"]
export const project1Images = ['/screenshots/screen_habits_landing.png', '/screenshots/screen_habits_landing_2.png', '/screenshots/screen_habits_login.png','/screenshots/screen_habits_onboarding.png', '/screenshots/screen_habits_onboarding_1.png', '/screenshots/screen_habits_habits.png', '/screenshots/screen_habits_dashboard.png' , '/screenshots/screen_habits_how.png']
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
export const project2Images = ['/screenshots/screen_TT_feed.png', '/screenshots/screen_TT_ticket.png', '/screenshots/screen_TT_dashboard.png', '/screenshots/screen_TT_history.png', '/screenshots/screen_TT_landing.png']
export const project2WebsiteUrl = "https://teamticket.vercel.app"
export const project2CodeUrl = "https://github.com/Jordan6794/Ticket-tracker"