// TODO: Update the website text
// TODO: Remove all in-line styling

/**
 * AboutSection: Renders the About Me content block.
 * @returns {JSX.Element}
 */
function AboutSection() {
  return (
    <>
      <h2 id="about-section" className="content-header" style={{ marginTop: 100 }}>About Me</h2>
      <div className="list-group-item list-group-item-action flex-column">
        <p className="card-text">
          Hello, I'm a rising senior at the <a href="https://www.uw.edu/">University of Washington</a> majoring in Computer Engineering. I have a strong interest in systems, full stack development, and generally anything to do with computing. Ideally, I would love to work on projects that require innovative solutions, collaboration, and have an intended consumer facing impact.
        </p>
        <p className="card-text">
          I'm very passionate about my teaching work. My experiences as a TA have definitely been the highlight of my time in college. In my free time I love to watch anime, play badminton, go on runs, and try out new restaurants in the greater Seattle area.
        </p>
      </div>
    </>
  )
}

export default AboutSection;
