import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  no: {
    translation: {
      themeLabel: {
        light: "Lys",
        dark: "Mørk",
      },
      printLabel: "Print/Lagre PDF",
      roleLabel: "Nyutdannet programvareutvikler",
      about:
        "Jeg fullfører våren 2026 en bachelor i frontend og mobilutvikling. Etter mange givende år i servicebransjen er jeg nå klar for å ta steget inn i teknologiens verden. Jeg trives spesielt godt med både React og React Native til å lage interaktive løsninger, samt bruke Java, C# eller andre backend-teknologier for å blåse liv i de. I tillegg synes jeg det er spennende å følge utviklingen av KI og er nygjerrig på hvordan det kan være med på å forme utviklerjobben. Gjennom studier, bachelorprosjekt og arbeidserfaring har jeg utviklet et sterkt fokus på samarbeid, struktur og gode brukeropplevelser.",
      sections: {
        work: "Arbeidserfaring",
        projects: "Prosjekter",
        education: "Utdanning",
        skills: "Kompetanse",
        roles: "Verv",
      },
      workExperience: [
        {
          period: "Desember 2019 - nå",
          title: "Salgsmedarbeider og SoMe-ansvarlig",
          place: "Musti Norge",
          details: ["Tiller, Vinderen og Lambertseter"],
        },
        {
          period: "April 2021 - juni 2023",
          title: "Salgsmedarbeider",
          place: "Zizzi Norge City Syd",
        },
        {
          period: "August 2019 - oktober 2020",
          title: "Salgsmedarbeider",
          place: "MAC Cosmetics Trondheim Torg",
        },
        {
          period: "Mars 2016 - januar 2018",
          title: "Skiftleder / medarbeider",
          place: "McDonalds Trondheim Torg, QSC Restauranter AS",
          details: [
            "Skiftleder (mai 2017 - jan 2018)",
            "Medarbeider (mars 2016 - apr 2017)",
          ],
        },
      ],
      projects: [
        {
          period: "Januar 2026 - nå",
          title: "Bacheloroppgave hos Function AS",
          place: "Nyutvikling av eksisterende applikasjon i React Native",
          details: [
            "Samarbeidet tett på bedriften for å utvikle en ny hi-fi prototype fra bunnen av i React Native, med fokus på bedre brukeropplevelse for fjernstyring av oppvarming i boliger.",
          ],
        },
      ],
      education: [
        {
          period: "2023 - nå",
          title: "Bachelor i informasjonsteknologi",
          place: "Frontend og mobilutvikling, Høyskolen Kristiania",
        },
        {
          period: "2012 - 2015",
          title: "Studiespesialiserende",
          place: "Byåsen videregående, Trondheim",
        },
      ],
      roles: [
        {
          period: "August 2025 - nå",
          title: "Varatillitsvalgt",
          place: "Frontend og mobilutvikling, Høyskolen Kristiania",
        },
        {
          period: "August 2023 - juni 2024",
          title: "Tillitsvalgt",
          place: "Frontend og mobilutvikling, Høyskolen Kristiania",
        },
        {
          period: "April 2018 - mai 2023",
          title: "Frivillighetsarbeid",
          place:
            "Fosterhjemsansvarlig og styremedlem hos Dyrebeskyttelsen Norge Sør-Trøndelag",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "React Native",
        "Expo",
        "Swift",
        ".NET/C#",
        "Java",
        "Python",
        "Kotlin",
        "C (Linux)",
        "MySQL",
        "Git",
        "Figma",
        "Prosjektstyring",
      ],
      digitalCvLabel: "Digital CV",
    },
  },
  en: {
    translation: {
      themeLabel: {
        light: "Light",
        dark: "Dark",
      },
      printLabel: "Print/Save PDF",
      roleLabel: "Software Developer Graduate",
      about:
        "I am completing a bachelor's degree in frontend and mobile development in the spring of 2026. After many rewarding years in the service industry, I am now ready to take the next step into software development. I especially enjoy building interactive solutions with both React and React Native, and using Java, C# and other backend technologies to bring them to life. I am also curious about AI and how it can help shape the developer role. Through my studies, bachelor project and work experience, I have developed a strong focus on collaboration, structure and great user experiences.",
      sections: {
        work: "Work Experience",
        projects: "Projects",
        education: "Education",
        skills: "Skills",
        roles: "Commitments",
      },
      workExperience: [
        {
          period: "December 2019 - present",
          title: "Sales Associate and SoMe Coordinator",
          place: "Musti Norge",
          details: ["Tiller, Vinderen and Lambertseter"],
        },
        {
          period: "April 2021 - June 2023",
          title: "Sales Associate",
          place: "Zizzi Norge City Syd",
        },
        {
          period: "August 2019 - October 2020",
          title: "Sales Associate",
          place: "MAC Cosmetics Trondheim Torg",
        },
        {
          period: "March 2016 - January 2018",
          title: "Shift Leader / Crew Member",
          place: "McDonalds Trondheim Torg, QSC Restauranter AS",
          details: [
            "Shift leader (May 2017 - Jan 2018)",
            "Crew member (March 2016 - Apr 2017)",
          ],
        },
      ],
      projects: [
        {
          period: "January 2026 - present",
          title: "Bachelor Project with Function AS",
          place: "Redevelopment of an existing application in React Native",
          details: [
            "Worked closely with the company to develop a new hi-fi prototype from scratch in React Native, focused on improving the user experience for remote home heating control.",
          ],
        },
      ],
      education: [
        {
          period: "2023 - present",
          title: "Bachelor's Degree in Information Technology",
          place: "Frontend and Mobile Development, Kristiania University College",
        },
        {
          period: "2012 - 2015",
          title: "General Studies",
          place: "Byåsen Upper Secondary School, Trondheim",
        },
      ],
      roles: [
        {
          period: "August 2025 - present",
          title: "Vice Class Representative",
          place: "Frontend and Mobile Development, Kristiania University College",
        },
        {
          period: "August 2023 - June 2024",
          title: "Class Representative",
          place: "Frontend and Mobile Development, Kristiania University College",
        },
        {
          period: "April 2018 - May 2023",
          title: "Volunteer Work",
          place:
            "Foster Home Coordinator and Board Member at Dyrebeskyttelsen Norge Sør-Trøndelag",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "React Native",
        "Expo",
        "Swift",
        ".NET/C#",
        "Java",
        "Python",
        "Kotlin",
        "C (Linux)",
        "MySQL",
        "Git",
        "Figma",
        "Project Management",
      ],
      digitalCvLabel: "Digital Resume",
    },
  },
} as const;

void i18n.use(initReactI18next).init({
  resources,
  lng: "no",
  fallbackLng: "no",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
