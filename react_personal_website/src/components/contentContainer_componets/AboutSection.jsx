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
          Hello, I'm a rising junior at the <a href="https://www.uw.edu/">University of Washington</a> majoring in Computer Engineering and minoring in Applied Mathamatics. I have a strong interest in system software development, web applications, and generally anything to do with computing. In my free time I love to watch anime, go on runs, and trying out new resturants in the greater Seattle area.
        </p>
      </div>
    </>
  )
}

export default AboutSection;
