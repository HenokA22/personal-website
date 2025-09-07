
function Header(props) {
  return (
    <header>
      <div className="logo"> Henok © </div>
      <div className="hamburger" onClick={() => props.setNavOpen((v) => !v)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`nav-bar ${props.navOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a id="home" href="#home" onClick={(e) => { e.preventDefault(); props.smoothScroll('home') }}>Home</a>
          </li>
          <li>
            <a id="about" href="#about-section" onClick={(e) => { e.preventDefault(); props.smoothScroll('about-section') }}>About Me</a>
          </li>
          <li>
            <a id="work" href="#work-section" onClick={(e) => { e.preventDefault(); props.smoothScroll('work-section') }}>Work History</a>
          </li>
          <li>
            <a id="projects" href="#projects-section" onClick={(e) => { e.preventDefault(); props.smoothScroll('projects-section') }}>Personal Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header