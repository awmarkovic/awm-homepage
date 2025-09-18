import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="page-layout">
      <header className="header">
        <img
          className="avatar"
          src="public/avatar.jpeg"
          alt="Picture of Amanda"
        />
        <div className="copy-text">
          <h1 className="name-label">Amanda Woldseth Markovic</h1>

          <span>17 desember 1996 | Mylskerudveien 37, 1152 Oslo</span>
          <br />
          <span>
            <a href="mailto:awmarkovic@gmail.com">awmarkovic@gmail.com</a>
            <span> | </span>
            <a href="tel:+4747668445">+47 47668445</a>
          </span>
        </div>
      </header>
      <div className="divider" />
      <div className="left"></div>
      <div className="right"></div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
