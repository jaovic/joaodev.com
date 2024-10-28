import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const AboutContainer = styled.main`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: red;
	color: ${({ theme }) => theme.colors.text};
	padding: 2rem;
	margin: 0 2rem;
	padding-top: 6rem;
	min-height: 100vh;
`;

const CircleContainer = styled.div`
	flex: 0 0 auto;
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

const About: React.FC = () => {
	const { t } = useTranslation();

	return (
		<AboutContainer id="about">
			<CircleContainer>
				<Circle>
					<img
						src="image/foto.jpg"
						alt="Foto"
						style={{ width: "100%", height: "auto" }}
					/>
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
		</AboutContainer>
	);
};

export default About;
