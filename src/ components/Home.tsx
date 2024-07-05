import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const HomeContainer = styled.main`
	display: flex;
	justify-content: space-evenly;
	align-items: start;
	background: ${({ theme }) => theme.colors.body};
	color: ${({ theme }) => theme.colors.text};
	padding: 2rem;
	min-height: calc(100vh - 8rem);
	margin: 0 2rem;
	padding-top: 6rem;
	min-height: calc(100vh - 7rem);
`;

const CircleContainer = styled.div`
	flex: 0 0 auto; /* Não se expande, tamanho automático */
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: ${({ theme }) => theme.colors.header};
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Description = styled.div`
	width: 600px;
	min-width: 600px;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
`;

const ExperienceSection = styled.section`
	width: 100%;
	padding-left: 2rem;
	text-align: left;
	margin-top: 2rem;
`;

const AboutSection = styled.section`
	text-align: left;
	margin-top: 2rem;
`;

const Home: React.FC = () => {
	const { t } = useTranslation();
	const { darkMode } = useTheme();

	return (
		<HomeContainer>
			<CircleContainer>
				<Circle>
					<img src="caminho/para/imagem.jpg" alt="Foto" />
				</Circle>
			</CircleContainer>
			<Description>
				<h2>{t("experience")}</h2>
				<ExperienceSection>
					<h3>{t("position")}</h3>
					<AboutSection>
						<p>{t("description")}</p>
					</AboutSection>
				</ExperienceSection>
			</Description>
		</HomeContainer>
	);
};

export default Home;
