import "./reset.css";
import "./App.css";
import {
  FiCalendar,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiMonitor,
} from "react-icons/fi";

const workExperience = [
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
];

const projects = [
  {
    period: "Januar 2026 - nå",
    title: "Bacheloroppgave hos Function AS",
    place: "Nyutvikling av eksisterende applikasjon i React Native",
    details: [
      "Samarbeidet tett på bedriften for å utvikle en ny hi-fi prototype fra bunnen av i React Native, med fokus på bedre brukeropplevelse for fjernstyring av oppvarming i boliger.",
    ],
  },
];

const education = [
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
];

const roles = [
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
];

const technologies = [
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
];

type ContactItemProps = {
  href?: string;
  icon: React.ReactNode;
  printOnly?: boolean;
  printText?: string;
  text: string;
};

function ContactItem({
  href,
  icon,
  printOnly,
  printText,
  text,
}: ContactItemProps) {
  const content = (
    <>
      <span className="contact-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-text">
        <span className="screen-only">{text}</span>
        <span className="print-only">{printText ?? text}</span>
      </span>
    </>
  );

  return (
    <li className={`contact-item${printOnly ? " contact-item-print-only" : ""}`}>
      {href ? (
        <a className="contact-link" href={href}>
          {content}
        </a>
      ) : (
        <div className="contact-link">{content}</div>
      )}
    </li>
  );
}

function App() {
  return (
    <main className="resume-page">
      <section className="resume-card">
        <header className="hero">
          <div className="hero-main">
            <img
              className="avatar"
              src={`${import.meta.env.BASE_URL}amanda.jpeg`}
              alt="Portrett av Amanda Woldseth Markovic"
            />

            <div className="hero-copy">
              <h1 className="name-label">Amanda Woldseth Markovic</h1>
              <p className="eyebrow">Nyutdannet programvareutvikler</p>
            </div>
            <section className="content-section side-section about-me">
              {/* <h2 className="section-title">Om meg</h2> */}
              <p className="body-text">
                Jeg fullfører våren 2026 en bachelor i frontend og
                mobilutvikling. Etter mange givende år i servicebransjen er jeg
                nå klar for å ta steget inn i teknologiens verden. Jeg trives
                spesielt godt med både React og React Native til å lage
                interaktive løsninger, samt bruke Java, C# eller andre
                backend-teknologier for å blåse liv i de. I tillegg synes jeg
                det er spennende å følge utviklingen av KI og er nygjerrig på
                hvordan det kan være med på å forme utviklerjobben. Gjennom
                studier, bachelorprosjekt og arbeidserfaring har jeg utviklet et
                sterkt fokus på samarbeid, struktur og gode brukeropplevelser.
              </p>
            </section>
          </div>

          <aside className="contact-panel">
            {/* <h2 className="panel-title">Kontakt</h2> */}
            <ul className="contact-list">
              <ContactItem text="17. desember 1996" icon={<FiCalendar />} />
              <ContactItem
                text="Mylskerudveien 37, 1152 Oslo"
                icon={<FiMapPin />}
              />
              <ContactItem
                href="mailto:awmarkovic@gmail.com"
                text="awmarkovic@gmail.com"
                icon={<FiMail />}
              />
              <ContactItem
                href="tel:+4747668445"
                text="+47 476 68 445"
                icon={<FiPhone />}
              />
              <ContactItem
                href="https://www.linkedin.com/in/amanda-woldseth-markovic-542226292/"
                printText="linkedin.com/in/amanda-woldseth-markovic-542226292"
                text="LinkedIn"
                icon={<FiLinkedin />}
              />
              <ContactItem
                href="https://github.com/awmarkovic"
                printText="github.com/awmarkovic"
                text="GitHub"
                icon={<FiGithub />}
              />
              <ContactItem
                href="https://awmarkovic.github.io/awm-homepage/"
                printOnly
                printText="awmarkovic.github.io/awm-homepage/"
                text="Digital CV"
                icon={<FiMonitor />}
              />
            </ul>
          </aside>
        </header>

        <div className="content-grid">
          <section className="main-column">
            <section className="content-section">
              <h2 className="section-title">Arbeidserfaring</h2>
              <div className="entry-list">
                {workExperience.map((item) => (
                  <article
                    className="entry"
                    key={`${item.period}-${item.title}`}
                  >
                    <p className="entry-period">{item.period}</p>
                    <h3 className="entry-title">{item.title}</h3>
                    <p className="entry-place">{item.place}</p>
                    {item.details?.map((detail) => (
                      <p className="entry-detail" key={detail}>
                        {detail}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section">
              <h2 className="section-title">Prosjekter</h2>
              <div className="entry-list">
                {projects.map((item) => (
                  <article
                    className="entry"
                    key={`${item.period}-${item.title}`}
                  >
                    <p className="entry-period">{item.period}</p>
                    <h3 className="entry-title">{item.title}</h3>
                    <p className="entry-place">{item.place}</p>
                    {item.details?.map((detail) => (
                      <p className="entry-detail" key={detail}>
                        {detail}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section">
              <h2 className="section-title">Utdanning</h2>
              <div className="entry-list">
                {education.map((item) => (
                  <article
                    className="entry"
                    key={`${item.period}-${item.title}`}
                  >
                    <p className="entry-period">{item.period}</p>
                    <h3 className="entry-title">{item.title}</h3>
                    <p className="entry-place">{item.place}</p>
                  </article>
                ))}
              </div>
            </section>
          </section>

          <aside className="side-column">
            <section className="content-section side-section">
              <h2 className="section-title">Kompetanse</h2>
              <ul className="tag-list">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>

            <section className="content-section side-section">
              <h2 className="section-title">Verv</h2>
              <div className="entry-list compact">
                {roles.map((item) => (
                  <article
                    className="entry"
                    key={`${item.period}-${item.title}`}
                  >
                    <p className="entry-period">{item.period}</p>
                    <h3 className="entry-title">{item.title}</h3>
                    <p className="entry-place">{item.place}</p>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default App;
