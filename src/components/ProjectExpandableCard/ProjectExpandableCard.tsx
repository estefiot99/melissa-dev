import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronUp } from 'lucide-react';
import type { PublicProject } from '../../sections/Products/Products';
import './project-expandable-card.less';

const ProjectExpandableCard: React.FC<ProjectExpandableCardProps> = ({
  project
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = bodyRef.current;
    if (!el) return;

    if (!isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px';
    } else {
      el.style.maxHeight = '336px';
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={`col-md-4 col-sm-12 expandable-card`}>
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(/images/projects/${project.image})`
          }}
        ></div>
        <div ref={bodyRef} className={`card-body ${isOpen ? 'open' : ''}`}>
          <div className="d-flex justify-content-between">
            <p className="card-title">{project.title}</p>
            {project.url ? (
              <a href={project.url} target="_blank">
                <ExternalLink color="#BBBBBB" width={20} />
              </a>
            ) : null}
          </div>
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
          <ChevronUp
            className="chevron"
            color="#929292"
            height={18}
            onClick={toggle}
          />
        </div>
      </div>
    </div>
  );
};

interface ProjectExpandableCardProps {
  project: PublicProject;
}

export default ProjectExpandableCard;
