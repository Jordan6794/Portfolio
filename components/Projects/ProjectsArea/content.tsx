import ScreenHabitsLanding from '../../../public/screen_habits_landing.png'
import ScreenTTDashboard from '../../../public/screen_TT_dashboard.png'

import styles from "./ProjectsArea.module.css"

export const project1 = {
    title: "Habits30",
    subtitle: "Web Application",
}

export const project1Text = <p className={styles.text}>Full stack web application, it helps you build and manage new habits <br /> Blabla <br /> Blablabla</p>

export const project1Technologies = ["React", "Redux", "MongoDB", "Node", "Express", "Typescript", "Oauth"]

export const project1Image = ScreenHabitsLanding


export const project2 = {
    title: "Team Ticket",
    subtitle: "Portfolio project",
}

export const project2Text = <p className={styles.text}>Full stack web application, bug tracker to manage tickets in a team <br /> Blabla <br /> Blablabla</p>

export const project2Technologies = ["React", "Redux", "Firebase", "Typescript"]

export const project2Image = ScreenTTDashboard
