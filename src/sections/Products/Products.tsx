import React, { useRef } from 'react';
import ProjectExpandableCard from '../../components/ProjectExpandableCard/ProjectExpandableCard';
import { useInViewAction } from '../../hooks/useInViewAction';
import { GithubIcon, ExternalLink } from 'lucide-react';
import './products.less';
import data from '../../assets/data/projects.json';

export type PublicProject = {
  category: string;
  title: string;
  image: string;
  url: string;
  tags: string[];
  role: string;
  stack: string[];
  goal: string;
  description: string;
};

export type PrivateProject = {
  category: string;
  title: string;
  tags: string[];
  role: string;
  stack: string[];
  goal: string;
  description: string;
};

export type DemoProject = {
  category: string;
  title: string;
  image: string;
  github: string;
  description: string;
};

function Products() {
  const publicProjects = data.filter(
    (project) => project.category === 'public'
  ) as PublicProject[];

  const privateProjects = data.filter(
    (project) => project.category === 'private'
  ) as PrivateProject[];

  const demoProjects = data.filter(
    (project) => project.category === 'demo'
  ) as DemoProject[];

  const fadeRef = useRef<HTMLDivElement | null>(null);

  useInViewAction(
    fadeRef,
    (el) => {
      el.classList.add('visible');
    },
    { stagger: 0.2 }
  );

  return (
    <section ref={fadeRef} className="products fade-on-scroll">
      <div className="container">
        <div className="section-head">
          <h3 className="title">Shipped Products</h3>
          <p className="subtitle">
            A collection of things I’ve built, launched, and improved for real
            people and real businesses.
          </p>
        </div>
        <div className="shipped-products">
          <div className="row">
            {publicProjects.map((project, index) => (
              <ProjectExpandableCard
                project={project}
                key={`public-project-${index}`}
              />
            ))}
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Private projects</p>
                  <p className="feature">
                    A selection of real-world projects completed under NDA,
                    presented as high-level case studies to showcase the
                    problems solved, the systems built, and the results
                    delivered.
                  </p>
                  <div className="project-list">
                    {privateProjects.map((project, index) => (
                      <div
                        className="private-project"
                        key={`private-project-${index}`}
                      >
                        <p className="title">
                          <span className="highlight">{project.title}</span>
                        </p>
                        <div className="tags">
                          {project.tags?.map((tag, i) => (
                            <div className="tag" key={`tag-${i}`}>
                              <span>{tag}</span>
                            </div>
                          ))}
                        </div>
                        <p className="feature">
                          <span>Role: </span>
                          {project.role}
                        </p>
                        <p className="feature">
                          <span>Tech Stack: </span>
                          {project.stack?.join(', ')}
                        </p>
                        <p className="feature">
                          <span>Goal: </span>
                          {project.goal}
                        </p>
                        <p className="description">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Demo projects</p>
                  <p className="feature">
                    A collection of smaller projects I built to experiment,
                    learn, and show how I think when building products from
                    scratch.
                  </p>
                  <div className="project-list">
                    {demoProjects.map((project, index) => (
                      <div
                        className="demo-project"
                        key={`demo-project-${index}`}
                      >
                        <p className="title">{project.title}</p>
                        <div className="demo-container">
                          <div
                            className="demo-image"
                            style={{
                              backgroundImage: `url(/images/projects/${project.image})`
                            }}
                          ></div>
                          <div>
                            <p className="description">{project.description}</p>
                            <div className="links">
                              <a href={project.github} target="_blank">
                                <GithubIcon
                                  color="#BBBBBB"
                                  width={20}
                                ></GithubIcon>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
