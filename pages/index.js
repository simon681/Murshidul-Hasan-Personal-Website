import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Murshidul Hasan | Digital Marketing Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Murshidul Hasan – Digital Marketing Strategist and Brand Consultant."
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-oBKvYcb8i7f9DpWfRCEi+fs1OUp6/tiQ6x77Ug6L/RPab/8iZw+ZIoPrdF+BdEULz41z1Fd9kO2F1e4gToNz9Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">Murshidul Hasan</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="bg-dark text-white text-center py-5 hero">
        <div className="container">
          <Image
            src="/images/profile.png"
            alt="Murshidul Hasan"
            width={150}
            height={150}
            className="profile-img mb-3"
          />
          <h1 className="display-4">Murshidul Hasan</h1>
          <p className="lead">Digital Marketer | Brand Strategist | Media Consultant</p>
        </div>
      </header>
      <main>
        <section id="about" className="py-5">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I am a results-driven digital marketing strategist with over 14 years of
              experience across media, e-commerce, banking, and advertising. Currently
              serving as Assistant Director at GroupM Bangladesh, I have successfully led
              campaigns for brands like Banglalink, ACI, Marico and Mobil.
            </p>
          </div>
        </section>

        <section id="projects" className="bg-light py-5">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="row">
              <div className="col-md-6 mb-4 d-flex flex-column align-items-start">
                <div className="logo-wrapper">
                  <Image src="/images/sharetrip.jpg" alt="ShareTrip Logo" width={120} height={60} className="project-logo" />
                </div>
                <h4>300% Revenue Growth at ShareTrip</h4>
                <p>
                  As Head of Digital Marketing at ShareTrip, I implemented data-driven campaigns across Meta and Google, resulting in a 3X revenue growth in under one year.
                </p>
              </div>

              <div className="col-md-6 mb-4 d-flex flex-column align-items-start">
                <div className="logo-wrapper">
                  <Image src="/images/amex.png" alt="American Express Logo" width={120} height={60} className="project-logo" />
                </div>
                <h4>Website Redesign – American Express Bangladesh</h4>
                <p>
                  Led the UX and digital revamp of the American Express Bangladesh site, focusing on responsive design and improved conversions.
                </p>
              </div>

              <div className="col-md-6 mb-4 d-flex flex-column align-items-start">
                <div className="logo-wrapper">
                  <Image src="/images/citybank.png" alt="City Bank Logo" width={120} height={60} className="project-logo" />
                </div>
                <h4>City Bank Website Redesign</h4>
                <p>
                  Directed the full redesign of the official City Bank website, aligning the digital presence with international UX standards.
                </p>
              </div>

              <div className="col-md-6 mb-4 d-flex flex-column align-items-start">
                <div className="logo-wrapper">
                  <Image src="/images/cityalo.png" alt="City Alo Logo" width={120} height={60} className="project-logo" />
                </div>
                <h4>City Alo &amp; CityGem Sapphire Website Launch</h4>
                <p>
                  Launched dedicated websites for City Alo and CityGem Sapphire, enhancing segmentation and lead generation via customized landing experiences.
                </p>
                <div className="logo-wrapper mt-2">
                  <Image src="/images/citygem.png" alt="CityGem Logo" width={120} height={60} className="project-logo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="py-5">
          <div className="container">
            <h2>Resume</h2>
            <p>
              <strong>Professional Summary:</strong> Senior digital marketing leader with 14+ years of expertise in
              brand strategy, digital transformation and integrated media solutions.
            </p>

            <h4 className="mt-4">Experience</h4>
            <ul>
              <li><strong>Assistant Director</strong> – GroupM Limited (Aug 2024 – Present)</li>
              <li><strong>Head of Marketing</strong> – FirstTrip (Apr 2024 – Aug 2024)</li>
              <li><strong>Head of Live Commerce, Marketing</strong> – Alibaba Group (Daraz) (Aug 2022 – Feb 2024)</li>
              <li><strong>Head of Digital Marketing</strong> – ShareTrip (Sep 2021 – Jul 2022)</li>
              <li><strong>Brand Manager &amp; Digital Marketing Lead</strong> – City Bank (Apr 2015 – Aug 2021)</li>
            </ul>

            <h4 className="mt-4">Education</h4>
            <ul>
              <li><strong>MBA, Marketing</strong> – University of Dhaka</li>
              <li><strong>BBA, Finance &amp; Economics</strong> – North South University</li>
            </ul>

            <h4 className="mt-4">Certifications</h4>
            <ul>
              <li>Google AI-Powered Performance Ads Certification</li>
              <li>Meta Social Media Marketing Specialization</li>
            </ul>

            <h4 className="mt-4">Technical Skills</h4>
            <p>Google Ads, Meta Ads Manager, HubSpot, SEMrush, Python, SQL, WordPress, and more.</p>

            <h4 className="mt-4">Languages</h4>
            <p>Bengali (native), English (fluent), German (intermediate), French (basic)</p>

            <h4 className="mt-4">Awards &amp; Volunteering</h4>
            <ul>
              <li>Certificate of Appreciation – City Bank, American Express</li>
              <li>Director – JCI Dhaka Independent</li>
            </ul>

            <h4 className="mt-4">Portfolio &amp; Capstone</h4>
            <p>
              <a href="https://simon681.github.io/My-HTML-Resume/" target="_blank" rel="noopener noreferrer">
                My HTML Resume
              </a>
            </p>
          </div>
        </section>

        <section id="contact" className="py-5">
          <div className="container text-center">
            <h2>Contact Me</h2>
            <p className="mt-4">
              Looking to collaborate or hire? I'm currently open to remote and hybrid opportunities!
            </p>
            <p>Email: <a href="mailto:hello@murshidul.com">hello@murshidul.com</a></p>
            <div className="social-icons d-flex justify-content-center gap-4 mt-3 flex-wrap">
              <a
                href="https://linkedin.com/in/murshidulhasan"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/simon681"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.facebook.com/murshidul.hasan26/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/murshidulhasan/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://x.com/murshid308"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4"
                aria-label="X"
              >
                <i className="bi bi-x"></i>
              </a>
              <a
                href="https://www.behance.net/murshidulhasan"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4"
                aria-label="Behance"
              >
                <i className="bi bi-behance"></i>
              </a>
              <a
                href="https://dribbble.com/simon681"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4"
                aria-label="Dribbble"
              >
                <i className="bi bi-dribbble"></i>
              </a>
            </div>
          </div>
        </section>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="btn btn-primary position-fixed"
          style={{ bottom: 20, right: 20 }}
        >
          ↑
        </button>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Murshidul Hasan. All rights reserved.</p>
      </footer>
    </>
  );
}
