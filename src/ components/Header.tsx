import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";
import { BsMoonStarsFill } from "react-icons/bs";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FiSun } from "react-icons/fi";
import { GiBrazilFlag } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

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
`;

const Logo = styled.h1`
	font-family: "Saira Stencil One", sans-serif;
	font-size: 2rem;
	font-weight: 400;
`;

const NavBar = styled.nav<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column; /* Muda para coluna em mobile */
	gap: 1.5rem;
	position: absolute; /* Para posicionar o menu em mobile */
	top: 4rem; /* Abaixo do cabeçalho */
	left: 0;
	right: 0;
	background: ${({ theme }) => theme.colors.header}; /* Cor de fundo do menu */
	padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
	transition: max-height 0.3s ease;
	max-height: ${({ isOpen }) =>
		isOpen ? "200px" : "0"}; /* Controla a visibilidade */
	overflow: hidden; /* Oculta o conteúdo que excede o max-height */

	@media (min-width: 768px) {
		flex-direction: row; /* Exibe em linha em telas maiores */
		position: initial; /* Restaura a posição normal */
		max-height: none; /* Remove o limite de altura */
	}
`;

const NavLink = styled.a`
	color: ${({ theme }) => theme.colors.headerText};
	text-decoration: none;
	font-size: 1rem;
	transition: color 0.3s;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
	font-family: "Saira", sans-serif;
	font-weight: 400;
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
			<Logo>{i18n.t("title")}</Logo>
			<ToggleButton onClick={() => setIsOpen(!isOpen)}>
				<FaBars />
			</ToggleButton>
			<NavBar isOpen={isOpen}>
				<NavLink href="/">{i18n.t("home")}</NavLink>
				<NavLink href="#about" style={{ transition: "color 0.8s" }}>
					{i18n.t("about")}
				</NavLink>
				<NavLink href="#experience">{i18n.t("experience")}</NavLink>
				<NavLink href="#projects">{i18n.t("projects")}</NavLink>
				<NavLink href="#skills">{i18n.t("skills")}</NavLink>
				<NavLink href="#contact">{i18n.t("contact")}</NavLink>
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
