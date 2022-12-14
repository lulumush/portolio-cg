import React from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Portfolio />
				<Contact />
				<Footer />				
			</main>
		</>

	)
}

export default App
