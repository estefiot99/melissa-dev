import { useState, useRef } from 'react';
import { useInViewAction } from '../../hooks/useInViewAction';
import './tech-stack.less';
import data from '../../assets/data/tech-stack.json';

type Subcategory = {
  name: string;
  stack: string[];
};

type TechCategory = {
  categoryName: string;
  subcategories: Subcategory[];
};

function TechStack() {
  const techCategories: TechCategory[] = data as TechCategory[];
  const allCategory = techCategories.find((cat) => cat.categoryName === 'All');

  const [activeCategory, setActiveCategory] = useState(allCategory);

  const handleCategoryClick = (category: TechCategory) => {
    setActiveCategory(category);
  };

  const fadeRef = useRef<HTMLDivElement | null>(null);

  useInViewAction(
    fadeRef,
    (el) => {
      el.classList.add('visible');
    },
    { stagger: 0.2 }
  );

  return (
    <section ref={fadeRef} className="tech-stack fade-on-scroll">
      <div className="container">
        <div className="section-head">
          <h3 className="title">My tech stack</h3>
          <p className="subtitle">
            To really understand what works best, you have to explore a lot of
            tools. These are the ones I’ve used along the way.
          </p>
        </div>
        <div className="filters">
          {techCategories.map((category, index) => (
            <button
              key={`category-${index}`}
              onClick={() => handleCategoryClick(category)}
              className={`filter-tag ${activeCategory?.categoryName === category.categoryName ? 'active' : ''}`}
            >
              <span>{category.categoryName}</span>
            </button>
          ))}
        </div>
        <div className="stack">
          {allCategory?.subcategories.map((subcat, index) => (
            <div className="subcategory" key={`subcategory-${index}`}>
              <p>{subcat.name}:</p>
              <div className="d-flex flex-wrap">
                {subcat.stack.map((item, i) => (
                  <div
                    className={`stack-item ${activeCategory?.subcategories[index].stack.includes(item) ? 'active' : 'inactive'}`}
                    key={`stack-item-${i}`}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
