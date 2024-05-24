// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const tittle = "JOAODEV.COM";

const resources = {
	en: {
		translation: {
			title: tittle,
			welcome: "Welcome to my portfolio",
			description:
				"Here you will find information about my projects and skills.",
		},
	},
	pt: {
		translation: {
			title: tittle,
			welcome: "Bem-vindo ao meu portfólio",
			description:
				"Aqui você encontrará informações sobre meus projetos e habilidades.",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en", // default language
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
