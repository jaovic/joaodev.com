import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";
import { BsMoonStarsFill } from "react-icons/bs";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FiSun } from "react-icons/fi";
import { GiBrazilFlag } from "react-icons/gi";

const HeaderContainer = styled.header`
	background: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.headerText};
	padding: 1rem 2rem;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
	box-shadow: 0 4px 10px -4px ${({ theme }) => theme.colors.header};
`;

const Title = styled.h1`
	font-family: "Montserrat", sans-serif;
	font-size: 1.5rem;
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
					{darkMode ? <FiSun size={20} /> : <BsMoonStarsFill size={20} />}
				</StyledButton>
				<StyledButton onClick={() => changeLanguage("pt")}>
					<GiBrazilFlag size={20} />
				</StyledButton>
				<StyledButton onClick={() => changeLanguage("en")}>
					<LiaFlagUsaSolid size={20} />
				</StyledButton>
			</ButtonContainer>
		</HeaderContainer>
	);
};

export default Header;
