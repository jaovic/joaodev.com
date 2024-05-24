// src/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import {
	ThemeProvider as StyledThemeProvider,
	DefaultTheme,
} from "styled-components";

const LightTheme: DefaultTheme = {
	colors: {
		background: "#f4f4f4",
		text: "#333",
		header: "#333",
		headerText: "#fff",
		footer: "#333",
		footerText: "#fff",
	},
};

const DarkTheme: DefaultTheme = {
	colors: {
		background: "#333",
		text: "#f4f4f4",
		header: "#000",
		headerText: "#fff",
		footer: "#000",
		footerText: "#fff",
	},
};

const ThemeContext = createContext<{
	toggleTheme: () => void;
	darkMode: boolean;
}>({
	toggleTheme: () => {},
	darkMode: false,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	const theme = darkMode ? DarkTheme : LightTheme;

	return (
		<ThemeContext.Provider value={{ toggleTheme, darkMode }}>
			<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};
