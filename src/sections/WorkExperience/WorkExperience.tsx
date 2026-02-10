import { useEffect, useRef, useState } from 'react';
import { useInViewAction } from '../../hooks/useInViewAction';
import './work-experience.less';
import data from '../../assets/data/experience.json';

type Position = {
  company: string;
  company_slug: string;
  role: string;
  location: string;
  model: string;
  date: string;
  responsibilities: string[];
};

function WorkExperience() {
  const experience: Position[] = data as Position[];
  const groupedByCompany = experience.reduce(
    (acc, item) => {
      const slug = item['company_slug'];

      if (!acc[slug]) {
        acc[slug] = [];
      }

      acc[slug].push(item);

      return acc;
    },
    {} as Record<string, Position[]>
  );
  const positionsByCompany = Object.entries(groupedByCompany);

  const fadeRef = useRef<HTMLDivElement | null>(null);

  useInViewAction(
    fadeRef,
    (el) => {
      el.classList.add('visible');
    },
    { stagger: 0.2 }
  );

  const [activeCompany, setActiveCompany] = useState<string | null>(null);
  const companiesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!companiesListRef.current) return;

      const referenceBottom =
        companiesListRef.current.getBoundingClientRect().bottom;

      let currentActive: string | null = null;

      positionsByCompany.forEach(([slug]) => {
        const timelineEl = document.querySelector(`.timeline .company.${slug}`);
        if (!timelineEl) return;

        const elRect = timelineEl.getBoundingClientRect();

        if (referenceBottom >= elRect.top && referenceBottom < elRect.bottom) {
          currentActive = slug;
        }
      });

      if (currentActive !== activeCompany) {
        setActiveCompany(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCompany]);

  return (
    <section ref={fadeRef} className="work-experience fade-on-scroll">
      <div className="container">
        <div className="section-head">
          <h3 className="title">Work Experience</h3>
          <p className="subtitle">
            Through these roles, I’ve developed my technical and professional
            skills while working on real products in fast-paced environments.
          </p>
        </div>
        <div className="experience">
          <div className="sidebar">
            <div className="companies-list" ref={companiesListRef}>
              {positionsByCompany.map(([slug, positions]) => (
                <p className={`company-name ${slug}`} key={slug}>
                  <span className={activeCompany === slug ? 'highlight' : ''}>
                    {positions[0].company}
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div className="timeline">
            {positionsByCompany.map(([slug, positions]) => (
              <div key={slug} className={`company ${slug}`}>
                {positions.map((position, index) => (
                  <div className="position" key={`position-${index}`}>
                    <div className="position-tick"></div>
                    <h5 className="title">
                      {position.role} · {position.company}
                    </h5>
                    <p className="details">
                      <span className="time">{position.date}</span> |{' '}
                      <span className="model">{position.model}</span> |{' '}
                      <span className="location">{position.location}</span>
                    </p>
                    <ul>
                      {position.responsibilities.map((res, i) => (
                        <li key={`res-${i}`}>{res}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
