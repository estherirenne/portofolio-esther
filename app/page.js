"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoActive, setLogoActive] = useState(false);
  const [typedText, setTypedText] = useState("");

  const words = [
    "Esther Nasya Irenne.",
    "CS Student.",
    "5th-semester.",
  ];

  // Efek mengetik otomatis (pengganti Typed.js)
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function type() {
      const currentWord = words[wordIndex];

      if (!deleting) {
        charIndex++;
        setTypedText(currentWord.slice(0, charIndex));
        if (charIndex === currentWord.length) {
          deleting = true;
          timeoutId = setTimeout(type, 1500);
          return;
        }
      } else {
        charIndex--;
        setTypedText(currentWord.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeoutId = setTimeout(type, deleting ? 40 : 70);
    }

    timeoutId = setTimeout(type, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  function handleLogoClick(e) {
    e.preventDefault();
    setLogoActive(true);
    document.querySelector("#portofolio")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setLogoActive(false), 1000);
  }

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="main-width">
          <header>
            
            <a href="#portofolio"
              className={`logo ${logoActive ? "active" : ""}`}
              onClick={handleLogoClick}
            >
              Portofo<span className="highlight">lio</span>
            </a>
            <nav>
              <div
                className={`hamb ${menuOpen ? "click" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#service">Service</a></li>
                <li className="btn"><a href="#contact">Contact & Comment</a></li>
              </ul>
            </nav>
          </header>

          <div className="container">
            <div className="hero-text">
              <h3>Hello!</h3>
              <h1>
                I Am <span className="input">{typedText}</span>
              </h1>
              <p><i className="fa-solid fa-location-dot"></i>Bandung, Jawa Barat</p>
              <div className="social">
                <a href="https://www.instagram.com/wntresthr_?igsh=Z3M3a2VmajRsYXF3&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/esther_irenne?s=11" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.threads.com/@wntresthr_?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-threads"></i>
                </a>
              </div>
              <a href="#about"><button type="button">More About Me</button></a>
            </div>

            <div className="bottom">
              <p>© 2026 Irenne - All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="main">
          <img src="/Image.jpg" alt="Esther Nasya Irenne" />
          <div className="about-text">
            <h2>About Me</h2>
            <h5>CS Student & 5th-Semester</h5>
            <p>As a 5th-semester Computer Science undergraduate at Bina Nusantara University (BINUS) Bandung, my background is rooted in building strong technical logic and digital solutions.</p>
            <p>I am currently studying software development, modern cloud infrastructure, and UI/UX design gaining hands on experience through roles such as core team staff in the thematic design division for GDGOC BINUS Bandung.</p>
            <p>Driven by a passion for modern tech, my primary technological interests lie in intelligent AI systems and scalable web technologies.</p>
            <p>Looking ahead, my career interest is focused on build a dynamic career at the intersection of technology and creative problem solving focusing on roles such as Software Engineer, AI/Cloud Developer, or UI/UX Product Designer where I can blend technical logic with innovative digital experiences.</p>
            <a href="mailto:esther.irenne@binus.ac.id?subject=Hai%20Irenne&body=Halo,%20saya%20ingin%20berbicara%20lebih%20lanjut.">
              <button type="button">Let&apos;s Talk!</button>
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="skills-container">
          <div className="skill-box">
            <h3>Programming</h3>
            <p>Python, JavaScript, CSS, HTML</p>
          </div>
          <div className="skill-box">
            <h3>Web development</h3>
            <p>Next.js, Vue.js/React</p>
          </div>
          <div className="skill-box">
            <h3>Language</h3>
            <p>Bahasa Indonesia, English</p>
          </div>
          <div className="skill-box">
            <h3>Tools</h3>
            <p>Git, GitHub, Docker, Figma</p>
            </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service">
        <div className="service">
          <div className="title">
            <h2>Education & Experience</h2>
          </div>

          <div className="box">
            <div className="card">
              <i className="fa-solid fa-bars"></i>
              <h5>Education & Internship</h5>
              <div className="pra">
                  <p className="sub-heading">Education:</p>
                <ul>
                  <li>Undergraduate Computer Science at Bina Nusantara University (BINUS) Bandung (5th Semester)</li>
                </ul>
                  <p className="sub-heading">Internship/Project Experience:</p>
                <ul>
                  <li>Involved in real world application developments, cloud infrastructure configurations, and multi step AI integration projects.</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <i className="fa-regular fa-user"></i>
              <h5>Organization & Competition</h5>
              <div className="pra">
                  <p className="sub-heading">Organization:</p>
                <ul>
                  <li>Core Team Staff in the Thematic Design Division for Google Developer Groups on Campus (GDGOC) BINUS Bandung.</li>
                </ul>
                  <p className="sub-heading">Competition:</p>
                <ul>
                  <li>Finalist in the BYFest Idea Competition 2025.</li>
                </ul> 
              </div>
            </div>

            <div className="card">
              <i className="fa-regular fa-bell"></i>
              <h5>Research & Certification</h5>
              <div className="pra">
                <p className="sub-heading">Research:</p>
              <ul>
                <li>Explored computational biology workflows (BioPython) and automated image classification models (MobileNetV2, YOLO).</li>
              </ul>
                <p className="sub-heading">Certificate:</p>
                <ul>
                <li>Google Development Group On Campus BINUS Bandung Certificate (UI/UX Designer, September 2026).</li>
                <li>Google Cloud Computing Certificate (Google Cloud, May 2026).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section className="portofolio" id="portofolio">
        <h2 className="heading">My<span>Portofolio</span></h2>
        <p className="portofolio-note">*Click on the photo to see the project</p>
        <div className="box-container">
          {portofolioItems.map((item) => (
            <a key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="box">
              <img src={item.image} alt={item.title}>
              </img>
              <div className="box-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>  
              </div> 
            </a>
          ))}
          </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="section-title">Contact & <span>Comment</span></h2>
        <p><i className="fa-regular fa-envelope"></i> esther.irenne@binus.ac.id</p>
        <p><i className="fa-regular fa-envelope"></i> esthernasya@gmail.com</p>
        <p><i className="fa-brands fa-whatsapp"></i> 089513560522</p>
        <p><i className="fa-brands fa-line"></i> esthernasya25_</p>

        <form action="https://formspree.io/f/xkgbywyd" method="POST" className="contact-form">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="text" name="title" placeholder="Project title" required />
  <textarea name="description" placeholder="Project description..." rows="5" required></textarea>
  <input type="url" name="link" placeholder="Project link (optional)" />
  <textarea name="message" placeholder="Write a message or comment..." rows="4" required></textarea>
  <button type="submit">Send</button>
</form>
      </section>
    </>
  );
}

    //data porto&link
    const portofolioItems = [
      {
        title: "Project 1",
        description: "TekGoHo is a group project created for a Business Innovation course during my second semester, designed to digitize local technician services. My impact was designing the end-to-end mobile interface, featuring location-based tracking, transparent profiles, and scheduling to solve trust issues in conventional hiring. Through this project, I learned how to balance user-centered design with technical constraints and business scalability.",
        image: "/portofolio1.jpg",
        link: "https://www.figma.com/proto/BmOnHNVkDHRdFvFPzgkr3t/TekGoHo-Mobile-Prototype?node-id=8-11&t=Tyj6vMFMecrIYogr-1&starting-point-node-id=23%3A169",
      },
      {
        title: "Project 2",
        description: "This infographics was a group project created for the BINUS Youth Festival 2025: Youth Changemaker idea competition, where our team successfully achieved the Finalist position. My impact on the team was leading the strategic research and structuring the &quotThree Pillars&quot framework (Ecological Restoration, Economic Diversification, and Partnership Accelerator) to break the vicious cycle of environmental degradation and poverty in Central Java's coastal area. Through this competition, I learned how to integrate socio-economic challenges with sustainable technical solutions, handle complex data visualization, and pitch interdisciplinary innovations that align directly with United Nations SDGs.",
        image: "/portofolio2.jpg",
        link: "https://drive.google.com/drive/folders/1m71ppFnmytScnsNCVpcaIw2ySloxZa_s",
      },
      {
        title: "Project 3",
        description: "This web application was a group project created for a Software Engineering final course assignment (UAS) during my fourth semester, where we built and deployed a live automated dermatological diagnostic platform. My impact on the team was designing the web's interactive layout and prototyping the user flow using Figma, as well as contributing to the comprehensive system documentation, manuscript preparation, and research presentation. Through this development process, I learned how to deep-dive into complex machine learning pipelines, evaluate multi-class classification metrics, and translate technical AI data into clear documentation and an accessible, user-centered interface.",
        image: "/portofolio3.jpg",
        link: "https://bewbred-skin-disease-classifier.hf.space",
      },
      {
        title: "Project 4",
        description: "MatchGuard Agent was developed as a collaborative team entry for an Agentic AI Hackathon, featuring a simulation-ready web interface designed to automate document reconciliation and discrepancy analysis. MatchGuardAgent leverages intelligent agentic reasoning pipelines to cross-reference data across Purchase Orders, Delivery Orders (Surat Jalan), and Invoices. My key contributions within the team included building the interactive frontend simulation interface to demonstrate automated audit logs and discrepancy detection in real-time.",
        image: "/portofolio4.png",
        link: "https://drive.google.com/file/d/1_VQoQrryzsF9whm9NIxP2VbdcPNSigm5/view?usp=sharing",
      },
      {
        title: "Project 5",
        description: "This application is an ongoing group project developed for a Mobile Programming course. The project is currently in the prototype stage, focusing on designing a digital solution tailored to support individuals with ADHD and mild autism. My core contributions within the team include mapping user flows, designing the user interface (UI/UX), and developing the interactive prototype in Figma to help reduce cognitive overload and assist users with task management.",
        image: "/portofolio5.jpg",
        link: "https://www.figma.com/proto/U6NNRBBu4EBHpJa63Zgvd9/Pacefuly?node-id=0-1&t=M7X3SIOz7fBGBoue-1",
      },
    ];