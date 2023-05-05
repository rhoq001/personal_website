import React from 'react'
import './about.css'
import { FaReact } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { useState } from 'react'
import { GiBrain } from 'react-icons/gi'
import { BsPatchCheckFill } from 'react-icons/bs'

const About = ({ about, skills }) => {
  const [content, setContent] = useState('None');
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__content'>
          <p className='about__paragraph'>
            {about}
          </p>
          <div className='about__cards'>
            <article>
              <article className='about__card'
              onMouseEnter={() => setContent('Languages')}
              onMouseLeave={() => setContent('None')}>
                <FaJava className='about__icon' />
                <h3>Programming Languages</h3>
                {content === 'Languages' && 
                  <div className='card__grid'>
                    {skills.programming_languages.map((language) =>
                    <article key={language} className='card__details'>
                      <h4 className='card__element'>
                        <BsPatchCheckFill className='checks'/>
                        {language}
                      </h4>
                    </article>
                    )}
                  </div>
                  }
              </article>
            </article>

            <article>
              <article className='about__card' 
              onMouseEnter={() => setContent('Frameworks')}
              onMouseLeave={() => setContent('None')}>
              <FaReact className='about__icon' />
                <h3>Frameworks/Dev Tools</h3>
                {content === 'Frameworks' && 
                  <div className='card__grid'>
                    {skills.frameworks.map((language) =>
                    <article key={language} className='card__details'>
                      <h4 className='card__element'>
                        <BsPatchCheckFill className='checks'/>
                        {language}
                      </h4>
                    </article>
                    )}
                  </div>
                }
              </article>
              
            </article>

            <article>
              <article className='about__card'
              onMouseEnter={() => setContent('Other')}
              onMouseLeave={() => setContent('None')}>
                <GiBrain className='about__icon' />
                <h3>Skills/Concepts</h3>
                {content === 'Other' && 
                  <div className='card__grid'>
                    {skills.concepts.map((language) =>
                    <article key={language} className='card__details'>
                      <h4 className='card__element'>
                        <BsPatchCheckFill className='checks'/>
                        {language}
                      </h4>
                    </article>
                    )}
                  </div>
                }
              </article>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About