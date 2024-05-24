// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const title = "JOAODEV.COM";

const resources = {
	en: {
		translation: {
			title,
			welcome: "Welcome to my portfolio",
			description:
				"Here you will find information about my projects and skills.",
			experience: "Experience",
			position: "Position",
		},
	},
	pt: {
		translation: {
			title,
			welcome: "Bem-vindo ao meu portfólio",
			description:
				"Aqui você encontrará informações sobre meus projetos e habilidades.",
			experience: "Experiencia",
			position: "Posição",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "pt",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
