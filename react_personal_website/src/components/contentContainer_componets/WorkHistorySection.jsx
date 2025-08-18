// TODO: Update the website text
// TODO: Adjust the company icon paths and image spacing
// TODO: Consider making work history and personal project sections use a map.

/**
 * WorkHistorySection: Renders the Work History content block.
 * @returns {JSX.Element}
 */
function WorkHistorySection() {
  return (
    <>
      <h2 id="work-section" className="content-header">Work History</h2>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Teaching Assistant @ Paul G Allen School of Computer Science & Engineering
          <img id="ta-logo" src="/TALogo.png" alt="Paul G Allen School Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">September 2024 - Present</h6>
        <p className="card-text">
          I had a chance to work with over 25 students. Within this time I facilitated discussions on data structures and object-oriented programming, reinforcing key concepts through lecture reviews and technical practice problems. One-on-one tutoring sessions focused on debugging techniques and resolving code issues in Java, resulting in an average grade improvement of half a letter grade. Grading responsibilities for five students included providing detailed weekly feedback to ensure fairness and consistency. Additionally, close collaboration with the professor helped streamline communication and implement course improvements discussed in weekly staff meetings.
        </p>
      </div>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Explore Intern @ Microsoft
          <svg id="microsoft-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <rect x="0" y="0" width="10" height="10" fill="#F25022" />
            <rect x="0" y="10" width="10" height="10" fill="#7FBA00" />
            <rect x="10" y="0" width="10" height="10" fill="#00A4EF" />
            <rect x="10" y="10" width="10" height="10" fill="#FFB900" />
          </svg>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Summer 2024</h6>
        <p className="card-text">
          I led research for a Microsoft Teams feature aimed at improving meeting concentration, discovering a 15% boost in focus. Additionally, I developed a C++ MFC-based Windows application to address incident reports during Teams calls, incorporating a recommendation algorithm that allowed clients to self-diagnose and resolve issues, potentially reducing company resource costs by 20%. I also wrote product specifications and design documents to outline our workflow and ensure alignment with industry standards.
        </p>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7238260832453718017/">LinkedIn post</a>
      </div>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title"> Software Tools Intern @ Boeing
          <img id="boeing-logo" src="/boeing-logo.webp" alt="Boeing Symbol" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Summer 2023</h6>
        <p className="card-text">
          I built a web portal landing page for the Software Integrated Tools (SIT) team, using Boeing's in-house development tools to ensure seamless integration. I also created a comprehensive spreadsheet tracking over 100 organizational tools and their program usage, gathering data through cross-team collaboration and communication with colleagues.
        </p>
      </div>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Student Instructor @ AVELA
          <img id="avela-logo" src="/avela-logo.jpeg" alt="AVELA Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Spring 2024</h6>
        <p className="card-text">
          I instructed over 15 K-12 students in the fundamentals of Arduino computing, guiding them through hands-on projects using sensors, lightbulbs, and keypads within Arduino’s IDE. I also revamped the course curriculum by brainstorming new ideas and implementing over 1,000 lines of code to create mini-exercises and a final project that helped students apply their knowledge in a practical, engaging way.
        </p>
      </div>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Teacher Assistant @
          <a href="https://www.rainierscholars.org/">Rainier Scholars</a>
          <img id="rainier-scholars" src="/rainier-scholars-logo.png" alt="Rainier Scholars logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Spring 2023</h6>
        <p className="card-text">
          I assisted over 25 eighth-grade students in a Python-focused curriculum, answering their questions and fostering their enthusiasm for programming. I also led makeup sessions, providing one-on-one instruction to students who missed regular classes. Through personalized guidance, I achieved a 100% success rate in helping them catch up and seamlessly rejoin the main curriculum.
        </p>
      </div>
    </>
  )
}

export default WorkHistorySection;
