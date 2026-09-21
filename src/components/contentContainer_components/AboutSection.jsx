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
          Hello 👋,  I'm a current Bachelor's/Master's student at the <b><a href="https://www.cs.washington.edu/academics/graduate/bsms/">University of Washington</a></b> majoring in Computer Science and Engineering.
        </p>

        <p className="card-text">
          I have a strong interest in API development, distributed systems (backend microservices, parallel computing), full stack development, operating systems, and anything to do with computing.
          I'm particularly excited about working on FinTech services and Android applications which is cultivated from my most recent internship at Google and desire to work on products where the cost of failure is high.
          As a methodical driven individual, I believe these are areas of interest that my skillset shines best!
        </p>

        <p className="card-text">
          Ideally, I would love to work on teams that are obsessed in providing solutions for customers, have a strong collaboration & mentorship culture, and are committed to building strong documentation.
        </p>
        <p className="card-text">
          I'm very passionate about my teaching work. My experiences as a TA have definitely been the highlight of my time in college. In my free time I love to watch anime, play badminton, go on runs, try out new restaurants in the greater Seattle area, and dabble in the intersection between the news and investing.
        </p>
        <p className="card-text">
          If you have any questions, feel free to shoot me an email or reach out on any platforms that I have shared. I'll get back to you as soon as I can!
        </p>
      </div>
    </>
  )
}

export default AboutSection;
