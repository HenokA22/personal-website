// TODO: Update the website text
// TODO: Consider making work history and personal project sections use a map.

/**
 * PersonalProjectsSection: Renders the Personal Projects content block.
 * @returns {JSX.Element}
 */
function PersonalProjectsSection() {
  return (
    <>
      <h2 id="projects-section" className="content-header">Personal Projects</h2>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">
          Friend-ly Project Manager & Backend Developer
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Currently creating!</h6>
        <p className="card-text">
          Developing a student-centered social media app aimed at helping commuters and first-year students at the University of Washington form meaningful and lasting friendships based on shared interests. Led discussions during the ideation process, contributing to design documentation that outlined MVP features, user stories, system architecture, API specifications, tech stack selection, and data schema.
        </p>
        <a href="https://github.com/SlysDev/friend-ly">GitHub Link</a>
      </div>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Course Website</h5>
        <h6 className="card-subtitle mb-2 text-muted">Summer 2024</h6>
        <p className="card-text">
          I developed a robust API for the MyPlan website, focusing on managing user course history and current enrollment data. By leveraging Express.js, I built a backend that efficiently processes and retrieves information from an SQLite database, ensuring a smooth and user-friendly experience. I crafted complex SQL queries to aggregate and present course information, empowering users to easily track their academic progress. Working collaboratively with a friend, we prioritized code quality, performance, and security, ensuring the project met all technical requirements. This experience significantly enhanced my skills in backend development, database management, and API design.
        </p>
        <a href="https://github.com/HenokA22/course-website">GitHub Link</a>
      </div>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Pong Game</h5>
        <h6 className="card-subtitle mb-2 text-muted">Summer 2023</h6>
        <p className="card-text">
          This project served as my introductory in web development. I chose something to build the was simple yet complex enough for me to learn from. <br /><br /> This project is a JavaScript-based Pong game with both single-player and two-player modes. Built using HTML, CSS, and JavaScript, it features smooth paddle controls, dynamic ball movement, and real-time gameplay updates. Players can choose between competing against an AI or another player, with collision detection and ball physics adding complexity. The game includes a start screen, pause, and reset functionality, providing an engaging and responsive experience.
        </p>
        <a href="https://github.com/HenokA22/Pong-Game">GitHub Link</a>
      </div>
    </>
  )
}

export default PersonalProjectsSection;
