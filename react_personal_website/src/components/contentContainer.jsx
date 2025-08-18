import { forwardRef } from 'react'

// This component encapsulates all scrollable content sections.
const ContentContainer = forwardRef(function ContentContainer(_props, ref) {
  return (
    <div className="content-container" ref={ref}>
      <div className="list-group d-flex justify-content-center" style={{ marginBottom: 40 }}>
        <h2 id="about-section" className="content-header" style={{ marginTop: 100 }}>About Me</h2>
        <div className="list-group-item list-group-item-action flex-column">
          <p className="card-text">
            Hello, I'm a rising junior at the <a href="https://www.uw.edu/">University of Washington</a> majoring in Computer Engineering and minoring in Applied Mathamatics. I have a strong interest in system software development, web applications, and generally anything to do with computing. In my free time I love to watch anime, go on runs, and trying out new resturants in the greater Seattle area.
          </p>
        </div>
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
      </div>
    </div>
  )
})

export default ContentContainer
