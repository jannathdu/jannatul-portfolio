const projects = [
  {
    number: "01",
    title: "Smart Expense Tracker",
    description: "A responsive web application for tracking income, expenses, and financial activity through a clean, user-friendly interface.",
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    href: "https://github.com/jannathdu/smart-expense-tracker",
  },
  {
    number: "02",
    title: "AI Research Paper Assistant",
    description: "An AI-powered application that turns academic papers into clear summaries, contributions, methodology explanations, keywords, and research insights.",
    tech: ["React.js", "FastAPI", "Python", "Gemini API"],
    href: "https://github.com/jannathdu/ai-research-paper-assistant",
  },
  {
    number: "03",
    title: "QuantumRouteDoctor",
    description: "A quantum-network diagnostic and routing support system that identifies link issues and recommends optimized routing strategies.",
    tech: ["Python", "Quantum Simulation", "QuNetSim", "Algorithms"],
    href: "https://github.com/jannathdu/QuantumRouteDoctor",
  },
];

const skills = ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "REST API", "Git", "GitHub", "Python", "FastAPI", "AI / ML", "Prompt Engineering", "Responsive Web Design"];

const certificates = [
  ["Full-Stack Development for Beginner", "React, Next.js & Node.js · Udemy · 2026"],
  ["Android & Kotlin App Development A–Z", "Udemy · 2026"],
  ["Master Website Creation", "15 Website Platforms · Udemy · 2026"],
  ["Certificate in Digital Marketing", "Leading Light Digital Marketing Academy"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to top"><span>JM</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <a className="mini-cta" href="mailto:jannathdu17@gmail.com">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero section" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Available for opportunities</p>
          <h1>I build thoughtful<br />digital <em>experiences.</em></h1>
          <p className="hero-lead">Full Stack Developer, Computer Science student, and AI enthusiast focused on turning ideas into clean, scalable products.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View my projects <Arrow /></a>
            <a className="button secondary" href="#contact">Contact me</a>
          </div>
          <div className="social-row">
            <a href="https://github.com/jannathdu" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://linkedin.com/in/jannatul-ferdoushy/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <img src="/profile.png" alt="Most Jannatul Ferdoushy Moriam" />
          <div className="portrait-tag"><b>Based in</b><span>Beijing, China</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of work"><div>FULL STACK DEVELOPMENT <i>✦</i> ARTIFICIAL INTELLIGENCE <i>✦</i> RESPONSIVE DESIGN <i>✦</i> QUANTUM NETWORKING <i>✦</i></div></section>

      <section className="section split" id="about">
        <div><p className="section-kicker">01 / About</p><h2>Curious by nature.<br /><span>Driven by craft.</span></h2></div>
        <div className="about-copy">
          <p>I am a Full Stack Developer and Computer Science student with a passion for creating scalable web applications and exploring emerging technologies.</p>
          <p>Skilled in React.js, Next.js, JavaScript, Node.js, and modern web tools, I focus on building clean, efficient, and user-centered digital experiences. I am continuously learning at the intersection of software development and Artificial Intelligence.</p>
          <div className="quick-facts"><div><b>2+</b><span>Years of academic<br />development</span></div><div><b>3</b><span>Featured<br />projects</span></div><div><b>19</b><span>Technical<br />skills</span></div></div>
        </div>
      </section>

      <section className="section skills-section">
        <p className="section-kicker">Skills & toolkit</p>
        <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading"><div><p className="section-kicker">02 / Selected work</p><h2>Projects built with<br /><span>purpose.</span></h2></div><p>A selection of projects spanning web development, artificial intelligence, and quantum-network research.</p></div>
        <div className="project-list">{projects.map((project) => (
          <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
            <span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div></div><span className="project-arrow"><Arrow /></span>
          </a>
        ))}</div>
      </section>

      <section className="section journey" id="experience">
        <div><p className="section-kicker">03 / Journey</p><h2>Learning, building,<br /><span>evolving.</span></h2></div>
        <div className="timeline">
          <article><span>2025 — 2027</span><h3>Master of Computer Science & Technology</h3><h4>Beijing Institute of Technology</h4><p>Researching quantum routing, artificial intelligence, machine learning, and next-generation communication networks.</p></article>
          <article><span>2020 — 2024</span><h3>Bachelor of Computer Science & Technology</h3><h4>Hangzhou Dianzi University</h4><p>Focused on software development, programming, machine learning, and AI-related technologies.</p></article>
          <article><span>2019 — Present</span><h3>Freelance Digital Marketer</h3><h4>Leading Light · Remote</h4><p>Creating content, managing social channels, growing audience engagement, and supporting brand awareness.</p></article>
        </div>
      </section>

      <section className="section interests">
        <div><p className="section-kicker">Research interests</p><h2>Beyond the<br /><span>interface.</span></h2></div>
        <div className="interest-grid"><span>Quantum<br />Networking</span><span>Artificial<br />Intelligence</span><span>Machine<br />Learning</span><span>Next-Generation<br />Networks</span></div>
      </section>

      <section className="section certificates">
        <p className="section-kicker">Certificates</p><div>{certificates.map(([title, info]) => <article key={title}><span>✓</span><div><h3>{title}</h3><p>{info}</p></div></article>)}</div>
      </section>

      <section className="section language-strip"><p className="section-kicker">Languages</p><div><span><b>Bengali</b> Native</span><span><b>English</b> Professional</span><span><b>Chinese</b> Intermediate</span></div></section>

      <section className="contact section" id="contact">
        <p className="section-kicker">04 / Contact</p><h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2>
        <p>I&apos;m always open to discussing new projects, research collaborations, or opportunities.</p>
        <a className="email-link" href="mailto:jannathdu17@gmail.com">jannathdu17@gmail.com <Arrow /></a>
        <form action="mailto:jannathdu17@gmail.com" method="post" encType="text/plain">
          <label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input type="email" name="email" required placeholder="you@example.com" /></label><label className="full">Subject<input name="subject" required placeholder="What would you like to discuss?" /></label><label className="full">Message<textarea name="message" required rows={4} placeholder="Tell me a little about your idea..." /></label><button className="button primary" type="submit">Send message <Arrow /></button>
        </form>
      </section>

      <footer><a className="brand" href="#home"><span>JM</span></a><p>Designed & built by Most Jannatul Ferdoushy Moriam.</p><div><a href="https://github.com/jannathdu">GitHub</a><a href="https://linkedin.com/in/jannatul-ferdoushy/">LinkedIn</a><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
