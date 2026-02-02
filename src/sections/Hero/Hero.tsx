import React, { useEffect } from 'react';
import memoji from '/images/memoji-peace.png';
import './hero.less';

function Hero() {
  useEffect(() => {
    console.log(
      '%c 👀 Psst... No errors in here, but you found a hidden feature\n%cType: reveal()',
      'color:#888; font-size:13px;',
      'color:#00c2ff; font-weight:600; cursor:pointer;'
    );

    (window as any).reveal = () => {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    };
  }, []);
  return (
    <section className="hero">
      <div className="container">
        <div className="d-flex flex-md-row flex-column-reverse">
          <div className="hero-text">
            <p className="welcome fade-in fade-in-slow">Welcome in!</p>
            <h1 className="fade-in fade-in">
              I’m Melissa. <span className="highlight">Software Engineer.</span>
            </h1>
            <p className="fade-in fade-in-fast">
              I turn ideas into polished digital products through code, design,
              and a lot of attention to detail. My goal is to solve real
              problems by building fast, intuitive, and engaging experiences
              people <span className="highlight">enjoy</span> using.
            </p>
            <div className="button-group fade-in fade-in-fast">
              <a
                href="mailto:melissaosorio851@gmail.com"
                className="button primary"
              >
                Let's Talk
              </a>
              <a
                href="/Melissa_O_Resume.pdf"
                download
                className="button tertiary"
              >
                Download my resume
              </a>
            </div>
          </div>
          <div className="mb-md-0 illustration">
            <div className="memoji">
              <h2 className="hidden">
                Senior Front-End & Full Stack Developer.
              </h2>
              <div className="circle-bg fade-in fade-in-fast">
                <svg viewBox="0 0 320 320" width="320" height="320">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150,150
                      m -152,0
                      a 129,129 0 1,1 304,0
                      a 129,129 0 1,1 -304,0"
                    />
                  </defs>
                  <text>
                    <textPath
                      href="#circlePath"
                      startOffset="0%"
                      textAnchor="start"
                      fill="#987f84"
                    >
                      Senior Front-End & Full Stack Developer.
                    </textPath>
                  </text>
                </svg>
                <img src={memoji} className="fade-in fade-in-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
