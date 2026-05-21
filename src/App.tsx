import "./reset.css";
import "./App.css";

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
    period: "August 2025 - juni 2026",
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
  "JavaScript",
  "React",
  "Vite",
  "React Native",
  "Expo",
  ".NET",
  "Python",
  "Kotlin",
  "MySQL",
  "Git",
  "GitHub Actions",
];

type ContactItemProps = {
  href?: string;
  icon: React.ReactNode;
  text: string;
};

function ContactItem({ href, icon, text }: ContactItemProps) {
  const content = (
    <>
      <span className="contact-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{text}</span>
    </>
  );

  return (
    <li className="contact-item">
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
              <h2 className="section-title">Om meg</h2>
              <p className="body-text">
                Jeg studerer frontend og mobilutvikling og liker å kombinere
                struktur, estetikk og tydelig kommunikasjon. Erfaringen min fra
                butikk, teamansvar og frivillig arbeid har gitt meg et sterkt
                fokus på mennesker, samarbeid og gjennomføring.
              </p>
            </section>
          </div>

          <aside className="contact-panel">
            <h2 className="panel-title">Kontakt</h2>
            <ul className="contact-list">
              <ContactItem
                text="17. desember 1996"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                }
              />
              <ContactItem
                text="Mylskerudveien 37, 1152 Oslo"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
              />
              <ContactItem
                href="mailto:awmarkovic@gmail.com"
                text="awmarkovic@gmail.com"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                }
              />
              <ContactItem
                href="tel:+4747668445"
                text="+47 476 68 445"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
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

            <section className="content-section side-section">
              <h2 className="section-title">Lenker</h2>
              <ul className="link-list">
                <li>
                  <span>LinkedIn</span>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/amanda-markovic-542226292/"
                  >
                    linkedin.com/in/amanda-markovic-542226292
                  </a>
                </li>
                <li>
                  <span>GitHub</span>
                  <a className="link" href="https://github.com/awmarkovic">
                    github.com/awmarkovic
                  </a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default App;
