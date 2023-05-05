import React, { useState } from 'react';
import './portfolio.css';


const Portfolio = ({ projects }) => {
  const [currProj, setCurrProj] = useState('')
  const [transparent, setTransparent] = useState(false)

  const noProp = (event) => {
    event.stopPropagation();
  }

  const handleClick = (id) => {
    setTransparent(true);
    setCurrProj(id);
    setTimeout(() => {
      setTransparent(false);
    }, 100);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className={currProj === '' ? 
      'container portfolio__container' 
      :'container portfolio__container__full'}>
        {projects.filter((project) => (project.id === currProj)).map((project) =>
        <article key={project.id} onClick={() => handleClick('')} className={!transparent && currProj === project.id ? 'portfolio__item' : 'portfolio__item hide'}>
          {currProj === project.id &&
          <>
            <div className='portfolio__item-image'>
              <img src={project.img} alt=''/>
            </div>
            <div className='portfolio__expanded'>
              <div className='pcolumn'>
                <h3>About Project</h3>
                {project.about.map((point) => 
                  <li key={point.id} className='list'>
                    {point.str}
                  </li>
                )}
              </div>
              <div className='pcolumn'>
                <h3>How it works</h3>
                <p>{project.how_works}</p>
              </div>
              <div className='pcolumn'>
                <h3>Problems encountered/learned</h3>
                {project.problems_learned.map((point) => 
                <li key={point.id} className='list'>
                  {point.str}
                </li>
                )}
              </div>
            </div>
          </>
          }
        </article>)}
        {projects.map((project) => 
        <article key={project.id} onClick={() => handleClick(project.id)} className={!transparent && currProj === '' ? 'portfolio__item' : 'portfolio__item hide'}>
          {currProj === '' &&
          <>
            <div className='portfolio__item-image'>
              <img src={project.img} alt=''/>
            </div>
            <h3>{project.name} (Click to Expand)</h3>
            <a onClick={noProp} href={project.github} className='m-2 btn btn-primary' target='blank'>Github</a>
            {!(project.demo === '') && <a onClick={noProp} href={project.demo} className='m-2 btn btn-primary' target='blank'>Demo</a>}
          </>
          }
        </article>)
        }
      </div>
    </section>
  )
}

export default Portfolio