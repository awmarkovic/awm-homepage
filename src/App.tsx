import "./reset.css";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ActionButton from "./ui/ActionButton";
import {
  FiCalendar,
  FiMoon,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiMonitor,
  FiPrinter,
  FiSun,
} from "react-icons/fi";

type ResumeEntry = {
  period: string;
  title: string;
  place: string;
  details?: string[];
};

const BIRTH_DATE = "1996-12-17";

type FlagIconProps = {
  country: "no" | "en";
};

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

function FlagIcon({ country }: FlagIconProps) {
  if (country === "no") {
    return (
      <span className="flag-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <rect width="24" height="24" rx="12" fill="#BA0C2F" />
          <rect x="6" width="4" height="24" fill="#FFFFFF" />
          <rect y="10" width="24" height="4" fill="#FFFFFF" />
          <rect x="7" width="2" height="24" fill="#00205B" />
          <rect y="11" width="24" height="2" fill="#00205B" />
        </svg>
      </span>
    );
  }

  return (
    <span className="flag-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <defs>
          <clipPath id="flag-uk-circle">
            <rect width="24" height="24" rx="12" />
          </clipPath>
        </defs>
        <g clipPath="url(#flag-uk-circle)">
          <rect width="24" height="24" fill="#012169" />
          <path d="M0 0 24 24M24 0 0 24" stroke="#FFF" strokeWidth="5" />
          <path d="M0 0 24 24M24 0 0 24" stroke="#C8102E" strokeWidth="2.5" />
          <path d="M12 0v24M0 12h24" stroke="#FFF" strokeWidth="8" />
          <path d="M12 0v24M0 12h24" stroke="#C8102E" strokeWidth="4" />
        </g>
      </svg>
    </span>
  );
}

function formatLocalizedDate(locale: string, isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00`);
  const formatter = new Intl.DateTimeFormat(
    locale.startsWith("en") ? "en-GB" : "no-NO",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  return formatter.format(date);
}

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const themeBeforePrintRef = useRef<"light" | "dark">("light");
  const { i18n, t } = useTranslation();

  const locale = i18n.language.startsWith("en") ? "en" : "no";
  const workExperience = t("workExperience", {
    returnObjects: true,
  }) as ResumeEntry[];
  const projects = t("projects", { returnObjects: true }) as ResumeEntry[];
  const education = t("education", { returnObjects: true }) as ResumeEntry[];
  const roles = t("roles", { returnObjects: true }) as ResumeEntry[];
  const technologies = t("technologies", { returnObjects: true }) as string[];
  const birthDate = formatLocalizedDate(locale, BIRTH_DATE);

  useEffect(() => {
    const handleBeforePrint = () => {
      themeBeforePrintRef.current = theme;
      setTheme("light");
    };

    const handleAfterPrint = () => {
      setTheme(themeBeforePrintRef.current);
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [theme]);

  const handlePrint = () => {
    themeBeforePrintRef.current = theme;
    setTheme("light");

    window.setTimeout(() => {
      window.print();
    }, 0);
  };

      const handleLocaleToggle = () => {
    void i18n.changeLanguage(locale === "no" ? "en" : "no");
  };

  return (
    <main className="resume-page" data-theme={theme}>
      <div className="resume-actions">
        <ActionButton
          className="locale-switch"
          onClick={handleLocaleToggle}
          aria-label={locale === "no" ? "Switch to English" : "Bytt til norsk"}
        >
          <span
            className={`locale-option${locale === "no" ? " is-active" : ""}`}
          >
            <FlagIcon country="no" />
            <span className="locale-label">NO</span>
          </span>
          <span className="locale-divider" aria-hidden="true">
            /
          </span>
          <span
            className={`locale-option${locale === "en" ? " is-active" : ""}`}
          >
            <FlagIcon country="en" />
            <span className="locale-label">EN</span>
          </span>
        </ActionButton>
        <ActionButton
          className="theme-button"
          onClick={() =>
            setTheme((currentTheme) =>
              currentTheme === "light" ? "dark" : "light",
            )
          }
        >
          {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          <span>
            {theme === "light"
              ? t("themeLabel.dark")
              : t("themeLabel.light")}
          </span>
        </ActionButton>
        <ActionButton className="print-button" onClick={handlePrint}>
          <FiPrinter aria-hidden="true" />
          <span>{t("printLabel")}</span>
        </ActionButton>
      </div>
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
              <p className="eyebrow">{t("roleLabel")}</p>
            </div>
            <section className="content-section side-section about-me">
              <p className="body-text">{t("about")}</p>
            </section>
          </div>

          <aside className="contact-panel">
            <ul className="contact-list">
              <ContactItem text={birthDate} icon={<FiCalendar />} />
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
                text={t("digitalCvLabel")}
                icon={<FiMonitor />}
              />
            </ul>
          </aside>
        </header>

        <div className="content-grid">
          <section className="main-column">
            <section className="content-section">
              <h2 className="section-title">{t("sections.work")}</h2>
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
              <h2 className="section-title">{t("sections.projects")}</h2>
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
              <h2 className="section-title">{t("sections.education")}</h2>
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
              <h2 className="section-title">{t("sections.skills")}</h2>
              <ul className="tag-list">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>

            <section className="content-section side-section">
              <h2 className="section-title">{t("sections.roles")}</h2>
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
