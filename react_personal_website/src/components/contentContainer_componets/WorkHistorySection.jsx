/**
 * WorkHistorySection: Renders the Work History content block.
 * @returns {JSX.Element}
 */
function WorkHistorySection() {
  return (
    <>
      <h2 id="work-section" className="content-header">Work History</h2>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Software Engineer Intern @ Uber{'     '}
          <img id="uber-logo" src="public/uber-icon.svg" alt="Uber Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Fall 2025</h6>
        <p className="card-text">
          Comming soon
        </p>
      </div>
      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Software Engineer Intern @ Microsoft{'     '}
          <svg id="microsoft-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <rect x="0" y="0" width="10" height="10" fill="#F25022" />
            <rect x="0" y="10" width="10" height="10" fill="#7FBA00" />
            <rect x="10" y="0" width="10" height="10" fill="#00A4EF" />
            <rect x="10" y="10" width="10" height="10" fill="#FFB900" />
          </svg>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Summer 2025</h6>
        <p className="card-text">
          During my internship, I built an AI agent to improve the triage capabilities of a Kubernetes-based incident management system and introduced a new data stream of images. To expand its reach, I wrote MCP servers that pulled from multiple sources such as a kusto database, vector database, and formatted log files. The impact of my work was evident in the agent's ability to handle a wider variety of incidents, leading to a 21% increase in successful triages. There is also an anticipated reduction in manual triage workload for the team.
        </p>
        <p className="card-text">
          I also had a chance to learn mocking techniques that allowed me to write reliable, maintainable tests. Beyond implementation, I drove discussions around agentic technologies such as Semantic Kernel and Azure AI Foundry, comparing multi-agent and monolithic systems to educate the team on ideal applications and guide future adoption.
        </p>
      </div>

      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Teaching Assistant @ Paul G Allen School of Computer Science & Engineering{'     '}
          <img id="ta-logo" src="/TALogo.png" alt="Paul G Allen School Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">September 2024 - June 2025</h6>
        <p className="card-text">
          During my time as a Hardware/Software Interface Teaching Assistant in the Paul G. Allen School, I worked closely with over 100 students across different formats of learning. Each week, I taught a recitation of lecture to 30 students to reinforce core principles of computer organization, C programming, and Assembly. As a Allen Scholars Teaching Assistant, I helped to facilitate group discussions of 25+ students on data structures and object-oriented programming. These sessions created space for collaboration and critical reflection, helping students connect theory to practice.
        </p>

        <p className="card-text">
          Beyond the classroom, I held office hours where nearly 100 students sought support throughout the year. In one-on-one tutoring sessions, I guided students through the debugging process and resolved code issues in both C and Java—support that often translated into visible improvements in their confidence and performance. I also oversaw grading for students in my courses, providing detailed weekly feedback to ensure fairness and consistency. My collaboration with the professor and teaching staff streamlined communication and directly shaped course improvements, making the classroom a stronger learning environment.
        </p>
      </div>

      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Research Assistant @ Paul G Allen School of Computer Science & Engineering{'     '}
          <img id="ta-logo" src="/TALogo.png" alt="Paul G Allen School Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">January 2025 - June 2025</h6>
        <p className="card-text">
          I collaborated with graduate student Chu Li to develop a geo-visualization question-and-answer application tailored for screen reader users. As part of this work, I designed and implemented a voice mode in React.js that integrated ChatGPT and the Web Speech API, enabling speech-to-text and microphone functionality while prioritizing accessibility.
        </p>
        <a href="#">Link to paper coming soon</a>
      </div>

      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Explore Intern @ Microsoft{'     '}
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
        <h5 className="card-title"> Software Tools Intern @ Boeing{'     '}
          <img id="boeing-logo" src="/boeing-logo.webp" alt="Boeing Symbol" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Summer 2023</h6>
        <p className="card-text">
          I built a web portal landing page for the Software Integrated Tools (SIT) team, using Boeing's in-house development tools to ensure seamless integration. This increased the team's visibility across the company. I also created a comprehensive technical asset inventory for over 100 organizational tools. This inventory tracked their program usage. I gathered data through collaboration across teams and communication with colleagues.
        </p>
      </div>

      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Teacher Assistant @{' '}
          <a href="https://www.rainierscholars.org/">Rainier Scholars</a>{'     '}
          <img id="rainier-scholars" src="/rainier-scholars-logo.png" alt="Rainier Scholars logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Fall 2023 & Fall 2024</h6>
        <p className="card-text">
          I assisted over 25 eighth-grade students in a Python-focused curriculum, answering their questions and fostering their enthusiasm for programming. I also led makeup sessions, providing one-on-one instruction to students who missed regular classes. Through personalized guidance, I achieved a 100% success rate in helping them catch up and seamlessly rejoin the main curriculum.
        </p>
      </div>

      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Student Instructor @ AVELA{'     '}
          <img id="avela-logo" src="/avela-logo.jpeg" alt="AVELA Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Spring 2024</h6>
        <p className="card-text">
          I instructed over 15 K-12 students in the fundamentals of Arduino computing, guiding them through hands-on projects using sensors, lightbulbs, and keypads within Arduino's IDE. I also revamped the course curriculum by brainstorming new ideas and implementing over 1,000 lines of code to create mini-exercises and a final project that helped students apply their knowledge in a practical, engaging way.
        </p>
      </div>
    </>
  )
}

export default WorkHistorySection;
