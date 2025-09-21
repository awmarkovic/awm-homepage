import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="page-layout">
      {/* Header of the page */}
      <header className="header">
        <img
          className="avatar"
          src={`${import.meta.env.BASE_URL}avatar.jpeg`}
          alt="Picture of Amanda"
        />

        <div className="header-text">
          <h1 className="name-label">Amanda Woldseth Markovic</h1>

          <p>17 desember 1996 | Mylskerudveien 37, 1152 Oslo</p>
          <p>
            <a className="link" href="mailto:awmarkovic@gmail.com">
              awmarkovic@gmail.com
            </a>
            <span> | </span>
            <a className="link" href="tel:+4747668445">
              +47 47668445
            </a>
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="divider" />
      <div className="left">
        <h2 className="titles">Arbeid</h2>
        <ul className="experience-list">
          <li>
            <p>
              <strong>Desember 2019 – nå</strong>{" "}
            </p>
            <p>Salgsmedarbeider og SoMe-ansvarlig </p>
            <p>Musti Norge - Tiller, Vinderen og Lambertseter</p>
          </li>
          <br />
          <li>
            <p>
              <strong>April 2021 – juni 2023</strong>
            </p>
            <p>Salgsmedarbeider</p>
            <p>Zizzi Norge City Syd</p>
          </li>
          <br />
          <li>
            <p>
              <strong>August 2019 – oktober 2020</strong>
            </p>
            <p>Salgsmedarbeider</p>
            <p>MAC Cosmetics Trondheim Torg</p>
          </li>
          <br />
          <li>
            <p>
              <strong>Mars 2016 - januar 2018</strong>
            </p>
            <p>Skiftleder (mai 2017 – jan 2018)</p>
            <p>Medarbeider (mars 2016 – apr 2017)</p>
            <p>McDonalds Trondheim Torg, QSC Restauranter AS</p>
          </li>
        </ul>
        <br />
        <h2 className="titles">Teknologier</h2>
        <p className="experience-list">
          HTML, CSS, TypeScript/JavaScript, Java, C#, Python, Kotlin, <br />C i
          Linux, Swift, Vite, React, Tailwind, MySQL, Git, GitHub Actions
        </p>
      </div>
      <div className="right">
        <h2 className="titles">Utdanning</h2>
        <ul className="experience-list">
          <li>
            <p>
              <strong>2023 – nå</strong>
            </p>
            <p>Bachelor</p>
            <p>Informasjonsteknologi - Frontend og mobilutvikling</p>
            <p>Høyskolen Kristiania, Oslo</p>
          </li>
          <br />
          <li>
            <p>
              <strong>2012 – 2015</strong>
            </p>
            <p>Studiespesialiserende </p>
            <p>Byåsen Videregående, Trondheim</p>
          </li>
        </ul>
        <br />
        <h2 className="titles">Verv</h2>
        <ul className="experience-list">
          <li>
            <p>
              <strong>August 2025 – desember 2025</strong>
            </p>
            <p>BouMentor</p>
            <p>Mentorprogram hos Bouvet avd. Oslo</p>
          </li>
          <br />
          <li>
            <p>
              <strong>August 2023 – juni 2024</strong>
            </p>
            <p>Tillitsvalgt - Frontend og mobilutvikling</p>
            <p>Høyskolen Kristiania, Oslo</p>
          </li>
          <br />
          <li>
            <p>
              <strong>April 2018 – mai 2023</strong>
            </p>
            <p>Frivillighetsarbeid </p>
            <p>
              Fosterhjemsansvarlig og styremedlem
              <p>hos Dyrebeskydelsen Norge Sør-Trøndelag</p>
            </p>
          </li>
        </ul>
      </div>

      {/* Footer of the page */}
      <footer className="footer">
        <h2 className="titles">Lenker</h2>
        <ul className="link-list">
          <li>
            <strong>LinkedIn</strong> <br />
            <a
              className="link"
              href="https://www.linkedin.com/in/amanda-markovic-542226292/"
            >
              https://www.linkedin.com/in/amanda-markovic-542226292/
            </a>
          </li>
          <li>
            <strong>GitHub</strong> <br />
            <a className="link" href="https://github.com/awmarkovic">
              https://github.com/awmarkovic
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
