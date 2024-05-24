// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "./ThemeContext";
import Header from "./ components/Header";
import Home from "./ components/Home";
import Footer from "./ components/Footer";

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<Router>
				<GlobalStyles />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	);
};

export default App;
