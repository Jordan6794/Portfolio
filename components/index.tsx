import { FunctionComponent } from 'react'

import About from './About/About'
import BackgroundColor from './BackgroundColor/BackgroundColor'
import Contact from './Contact/Contact'
import CTA from './CTA/CTA'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Nav from './Nav/Nav'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

const Index: FunctionComponent = () => {
	return (
		<>
            <Nav />
			<Hero />
			<BackgroundColor />
            <Projects />
			<CTA />
			<Skills />
			<About />
			<Contact />
			<Footer />
		</>
	)
}

export default Index