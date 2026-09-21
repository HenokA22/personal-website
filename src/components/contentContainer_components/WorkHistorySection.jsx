/**
 * WorkHistorySection: Renders the Work History content block.
 * @returns {JSX.Element}
 */
function WorkHistorySection() {
  return (
    <>
      <h2 id="work-section" className="content-header">Work History</h2>

      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Teaching Assistant @ Paul G. Allen School of Computer Science & Engineering{'     '}
          <img id="ta-logo" src="/TALogo.png" alt="Paul G. Allen School Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">September 2024 - Present</h6>
        <p className="card-text">
          During my time as a Hardware/Software Interface Teaching Assistant in the Paul G. Allen School, I worked closely with over <b>100</b> students across different formats of learning. Each week, I taught a recitation of lecture to <b>27+</b> students to reinforce core principles of <b>computer organization, C programming, and Assembly</b>.
        </p>

        <p className="card-text"> As an Allen Scholars Teaching Assistant, I helped to facilitate group discussions of 25+ students on data structures and object-oriented programming. These sessions created space for collaboration and critical reflection, helping students connect theory to practice.</p>

        <p className="card-text">
          Beyond the classroom, I held office hours where nearly 100 students sought support throughout the year. In one-on-one tutoring sessions, I guided students through the debugging process and resolved code issues in both C and Java—support that often translated into visible improvements in their confidence and performance. I also oversaw grading for students in my courses, providing detailed weekly feedback to ensure fairness and consistency. My collaboration with the professor and teaching staff streamlined communication and directly shaped course improvements, making the classroom a stronger learning environment.
        </p>
      </div>


      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Software Engineer Intern @ Google{'     '}
          <img id="google-logo" src="/google-logo.png" alt="Google Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Summer 2026</h6>
        <p className="card-text">
          Throughout my internship, I was tasked with migrating usages of <b>AsyncTask</b> (deprecated) code within the Google Drive Android codebase to <b>Kotlin Coroutines</b>. Doing so reduced the risk of memory leaks, app crashes, and Application Not Responding (ANRs) from happening in an application serving <b>700M+ users.</b> Doing so improved the maintainability of the codebase as there was a reduction in the cognitive load of developers needing to manage multiple asynchronous programming frameworks, improve readability, and decrease the onboarding cost for new engineers.
        </p>

        <p className="card-text">
          To ensure safe migrations, I leveraged an experimental (A/B) flagging framework to execute controlled, staged rollouts of migrations, while using internal monitoring tools to manage crash clusters and performance metrics in order to ensure zero regressions before <b>100% </b> production release. I also wrote UI integration and unit tests to ensure all success and failure outcomes of UI flows async computations are properly tested. As AsyncTask was notoriously hard to test, I was able to increase the code coverage of async code to over <b>90%</b> and certain directories by up to <b>57%.</b>
        </p>

        <p className="card-text">
          I wasn't able to clean up all instances. However, I provided a clear roadmap to do so. I did this by <b>authoring a migration playbook document</b> that outlines best practices when writing Kotlin Coroutines in the context of AsyncTask migrations, details common pitfalls when doing so, testing strategies, and equips Drive Engineers with the necessary toolkit to be empowered to perform the remaining set of AsyncTask migrations.
        </p>

        <p className="card-text">
          Google moves fast, and I was able to successfully learn at least 10+ internal tools and improve my velocity in writing production quality code.
        </p>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7506888736157241345/">LinkedIn post</a>
      </div>


      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Software Engineer Intern @ Uber{'     '}
          <img id="uber-logo" src="/uber-icon.svg" alt="Uber Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Fall 2025</h6>
        <p className="card-text">
          Throughout my internship, I engineered 2 full stack automation features <b>(Java, React.js)</b> for a non engineering team dashboard to <b>1.{')'}</b> quickly disable a team owned algorithm's parameters and
          <b> 2.{')'}</b> accelerate the pace of launching the algorithm to new cities. This led to reduced friction in the communication between the Eats real time pricing team and a supporting non engineering team during oncall while also shortening a manual oncall task from a <b>2-3 day</b> process to <b>3 mins</b>.
        </p>
        <p className="card-text">
          To do so, I built <b>3 gRPCs</b> to automate the update of <b>13+ dynamic configuration objects</b> involved in an algorithm usage and set up cron timer(s) to continuously trigger procedures related to the algorithm execution. I also defined new Protobuf messages in order to ensure my changes are backward compatible. I leveraged Java's CompletableFutures to achieve asynchronous data processing and provide robust error handling.
        </p>

        <p className="card-text">
          I personally was able to strengthen my ability to adapt to shifting requirements, leverage collaboration across teams to learn new internal tools, and take ownership of a project. On this last point, I consistently updated stakeholders on personal progress, sought out feedback from team members, learned from mistakes, and wrote thorough documentation outlining project progress and technical tradeoffs considered.
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
          During my internship, I built an AI agent to improve the triage capabilities of a Kubernetes-based incident management system and introduced a new data stream of images. To expand its reach, I wrote MCP servers that pulled from multiple sources such as a Kusto database, vector database, and formatted log files. The impact of my work was evident in the agent's ability to handle a wider variety of incidents, leading to a <b>21% </b>increase in successful triages. There is also an anticipated reduction in manual triage workload for the team.
        </p>
        <p className="card-text">
          I also had a chance to learn mocking techniques that allowed me to write reliable, maintainable tests. Beyond implementation, I drove discussions around agentic technologies such as Semantic Kernel and Azure AI Foundry, comparing multi-agent and monolithic systems by creating a tradeoff document and presenting it in a teamwide meeting to educate the team on ideal applications and guide future adoption.
        </p>
      </div>

      <div className="list-group-item list-group-item-action flex-column">
        <h5 className="card-title">Research Assistant @ Paul G. Allen School of Computer Science & Engineering{'     '}
          <img id="ta-logo" src="/TALogo.png" alt="Paul G. Allen School Logo" />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">January 2025 - June 2025</h6>
        <p className="card-text">
          I collaborated with graduate student Chu Li to develop a geo-visualization question-and-answer application tailored for screen reader users. As part of this work, I designed and implemented a voice mode in React.js that integrated <b>ChatGPT</b> and the <b>Web Speech API</b>, enabling speech-to-text and microphone functionality while prioritizing accessibility.
        </p>


        <a href="https://makeabilitylab.cs.washington.edu/project/geovisally/">Description of project</a>
        <br />
        <a href="https://makeabilitylab.cs.washington.edu/media/publications/Li_Geovisa11YAnAiBasedGeovisualizationQuestionAnsweringSystemForScreenReaderUsers_CHI2026.pdf">Paper</a>
      </div >

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
          I led the development for a Microsoft Teams feature aimed at improving meeting concentration, discovering a 15% boost in focus. Additionally, I developed a C++ MFC-based Windows application to address incident reports during Teams calls, incorporating a recommendation algorithm that allowed clients to self-diagnose and resolve issues, potentially reducing company resource costs by 20%. I also wrote product specifications and design documents to outline our workflow and ensure alignment with industry standards.
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
