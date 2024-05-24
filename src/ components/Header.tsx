import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const HeaderContainer = styled.header`
	background: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.headerText};
	padding: 1rem 2rem;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	font-family: "Montserrat", sans-serif;
	font-size: 2.5rem;
	font-weight: 700;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledButton = styled.button`
	background: ${({ theme }) => theme.colors.headerText};
	color: ${({ theme }) => theme.colors.header};
	border: 2px solid ${({ theme }) => theme.colors.headerText};
	border-radius: 5px;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-size: 1rem;
	transition: background 0.3s, color 0.3s;

	&:hover {
		background: ${({ theme }) => theme.colors.header};
		color: ${({ theme }) => theme.colors.headerText};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.headerText};
	}
`;

const Header: React.FC = () => {
	const { i18n } = useTranslation();
	const { toggleTheme, darkMode } = useTheme();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<HeaderContainer>
			<Title>{i18n.t("title")}</Title>
			<ButtonContainer>
				<StyledButton onClick={toggleTheme}>
					{darkMode ? "Light Mode" : "Dark Mode"}
				</StyledButton>
				<StyledButton onClick={() => changeLanguage("pt")}>PT</StyledButton>
				<StyledButton onClick={() => changeLanguage("en")}>EN</StyledButton>
			</ButtonContainer>
		</HeaderContainer>
	);
};

export default Header;
