import React, { useEffect, useRef, useState } from 'react';
import FactsCarousel from '../../components/FactsCarousel/FactsCarousel';
import { useInViewAction } from '../../hooks/useInViewAction';
import Confetti from 'react-confetti';
import memoji_happy from '/images/memoji-happy.png';
import memoji_party from '/images/memoji-party.png';

import './about-me.less';

function AboutMe() {
  const fadeRef = useRef<HTMLDivElement | null>(null);

  useInViewAction(
    fadeRef,
    (el) => {
      el.classList.add('visible');
    },
    { stagger: 0.2 }
  );

  const [activeMemoji, setActiveMemoji] = useState(memoji_happy);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pieces, setPieces] = useState(400);

  const handleTalkClick = () => {
    setShowConfetti(true);

    const interval = setInterval(() => {
      setPieces((p) => Math.max(p - 20, 0));
    }, 400);
    if (activeMemoji === memoji_happy) setActiveMemoji(memoji_party);

    return () => clearInterval(interval);
  };

  return (
    <>
      {showConfetti && (
        <div className="confetti-wrapper">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={pieces}
            recycle={false}
            gravity={0.25}
          />
        </div>
      )}
      <section ref={fadeRef} className="about-me fade-on-scroll">
        <div className="container">
          <div className="section-head">
            <h3 className="title">About me</h3>
            <p className="subtitle">Always learning. Always building.</p>
          </div>
          <div className="row facts">
            <div className="facts-carousel">
              <FactsCarousel></FactsCarousel>
            </div>
            <div className="col-lg-4 col-md-12 facts-container">
              <div className="card">
                <div className="fact">
                  <img src={'/images/emojis/coffee.png'} alt="" />
                  <p>
                    Powered by <span>coffee</span> and good playlists.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="fact">
                  <img src={'/images/emojis/soccer.png'} alt="" />
                  <p>
                    Big soccer fan and lifelong supporter of{' '}
                    <span>Barcelona</span>.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="fact">
                  <img src={'/images/emojis/plane.png'} alt="" />
                  <p>
                    I love <span>traveling</span> and exploring new places
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 memoji">
              <img src={activeMemoji} alt="" />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card why-me-card">
                <div className="why-me">
                  <p className="title">Why choose me?</p>
                  <ul>
                    <li>
                      Senior-level experience delivering production-ready
                      applications
                    </li>
                    <li>
                      Strong balance between technical excellence and
                      communication
                    </li>
                    <li>Trusted team player and former front-end lead</li>
                    <li>
                      Detail-oriented with a focus on quality and performance
                    </li>
                    <li>
                      Proactive problem-solver who takes ownership from idea to
                      delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a
            href="mailto:melissaosorio851@gmail.com"
            className="button primary lets-talk"
            onClick={handleTalkClick}
          >
            Let's Talk
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
