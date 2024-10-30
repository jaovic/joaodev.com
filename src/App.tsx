// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "./ThemeContext";
import Header from "./ components/Header";
import Home from "./ components/Home";
import Footer from "./ components/Footer";
import About from "./ components/about";
import Experience from "./ components/experience";
import Projects from "./ components/projects";
import Skills from "./ components/skills";
import Contact from "./ components/contact";

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<Router>
				<GlobalStyles />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Contact />
				<Footer />
			</Router>
		</ThemeProvider>
	);
};

export default App;
