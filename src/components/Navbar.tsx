import Clock from "./Clock";

export default function Navbar() {
  const time = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <header className="navBar">
      <nav className="navBarContent">

        <div className="navBarLeft" style={{textAlign: 'center'}}>
          <a className="navBarLeftContent" href="/">
            Jake DePietro
          </a>
        </div>

        <div className="navBarCenter" style={{textAlign: 'center'}}>
          <a className="navBarCenterContent" href="#projects">Projects</a>
          <a className="navBarCenterContent" href="#resume">Resume</a>
          <a className="navBarCenterContent" href="#contact">Contact</a>
        </div>

        <div className="navBarRight" style={{textAlign: 'center'}}>
         <Clock />
        </div>
      </nav>
    </header>
  );
}
