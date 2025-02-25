import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";
import { BsMoonStarsFill } from "react-icons/bs";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FiSun } from "react-icons/fi";
import { GiBrazilFlag } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const HeaderContainer = styled.header`
	background: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.headerText};
	padding: 1rem 2rem;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
	width: 100%;
	box-shadow: 0 4px 10px -4px ${({ theme }) => theme.colors.header};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
`;

const Logo = styled.h1`
	font-family: "Saira Stencil One", sans-serif;
	font-size: 2rem;
	font-weight: 400;
`;

const NavBar = styled.nav<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	position: absolute;
	top: 4rem;
	left: 0;
	right: 0;
	background: ${({ theme }) => theme.colors.header};
	padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
	transition: max-height 0.3s ease;
	max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
	overflow: hidden;

	@media (min-width: 768px) {
		flex-direction: row;
		position: initial;
		max-height: none;
	}
`;

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.headerText};
	text-decoration: none;
	font-size: 1rem;
	transition: color 0.3s ease, transform 0.2s ease;
	font-family: "Saira", sans-serif;
	font-weight: 400;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		transform: scale(1.05);
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledButton = styled.button`
	background: ${({ theme }) => theme.colors.headerText};
	color: ${({ theme }) => theme.colors.header};
	border: 2px solid ${({ theme }) => theme.colors.headerText};
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	padding: 0.25rem 0.5rem;
	cursor: pointer;
	transition: background 0.3s, color 0.3s, transform 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: ${({ theme }) => theme.colors.header};
		color: ${({ theme }) => theme.colors.headerText};
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.headerText};
	}
`;

const ToggleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.headerText};
	font-size: 1.5rem;
	cursor: pointer;

	@media (min-width: 768px) {
		display: none; /* Esconde o botão em telas maiores */
	}
`;

const Header: React.FC = () => {
	const { i18n } = useTranslation();
	const { toggleTheme, darkMode } = useTheme();
	const [isOpen, setIsOpen] = useState(false);

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<HeaderContainer>
			<StyledLink to="home" smooth={true} duration={500}>
				<Logo>{i18n.t("title")}</Logo>
			</StyledLink>
			<ToggleButton onClick={() => setIsOpen(!isOpen)}>
				<FaBars />
			</ToggleButton>
			<NavBar isOpen={isOpen}>
				<StyledLink to="home" smooth={true} duration={500} offset={-64}>
					{i18n.t("home")}
				</StyledLink>
				<StyledLink to="about" smooth={true} duration={500} offset={-64}>
					{i18n.t("about")}
				</StyledLink>
				<StyledLink to="experience" smooth={true} duration={500} offset={-64}>
					{i18n.t("experience")}
				</StyledLink>
				<StyledLink to="projects" smooth={true} duration={500} offset={-64}>
					{i18n.t("projects")}
				</StyledLink>
				<StyledLink to="skills" smooth={true} duration={500} offset={-64}>
					{i18n.t("skills")}
				</StyledLink>
				<StyledLink to="contact" smooth={true} duration={500} offset={-64}>
					{i18n.t("contact")}
				</StyledLink>
			</NavBar>
			<ButtonContainer>
				<StyledButton onClick={toggleTheme}>
					{darkMode ? <FiSun size={20} /> : <BsMoonStarsFill size={20} />}
				</StyledButton>
				<StyledButton
					onClick={() => changeLanguage(i18n.language === "en" ? "pt" : "en")}
				>
					{i18n.language === "en" ? (
						<GiBrazilFlag size={20} />
					) : (
						<LiaFlagUsaSolid size={20} />
					)}
				</StyledButton>
			</ButtonContainer>
		</HeaderContainer>
	);
};

export default Header;
