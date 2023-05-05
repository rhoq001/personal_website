import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrHomeRounded } from 'react-icons/gr';

import './Timeline.css';
import './experience.css';

const Experience = ({ experience, education, certs }) => {
  const [content, setContent] = useState('')
  const timeline = [...experience, education, ...certs].sort((a,b) => {
    if(a.timeline_id > b.timeline_id) return 1;
    if(a.timeline_id < b.timeline_id) return -1;
    return 0;
  })

  const display_cert = (cert) => {
    return (
      <VerticalTimelineElement key={cert.id} className='vertical-timeline-element--cert' 
      date={cert.dates} iconStyle={{background: 'purple', color: 'white'}}>
        <h3 className='exp__title'>Certification/Projects</h3>
        <h4>{cert.name}</h4>
        {(content === cert.id) &&
        <ul className='experience__list'>
          {cert.description.map((description) => 
          <li key={description}>
            {description}
          </li>)}
        </ul>
        }
        <footer>
          {!(content === cert.id) ?
          <AiOutlineArrowDown className='icons' onClick={() => setContent(cert.id)} />
          :
          <AiOutlineArrowUp className='icons' onClick={() => setContent('')}/>
          }
        </footer>
      </VerticalTimelineElement>
    )
  }

  const display_work = (work) => {
    return (
      <VerticalTimelineElement key={work.id} className='vertical-timeline-element--work' date={work.dates} iconStyle={{background: 'purple', color: 'white'}}>
        <h3 className='exp__title'>Work Experience</h3>
        <h4 className='underline bold'>{work.job}</h4>
        <div className='italicize'>{work.client}</div>
        <div className='bold'>Role: {work.role}</div>
        {(content === work.id) &&
        <ul className='experience__list'>
          {work.description.map((point) => 
          <li key={point}>
            {point}
          </li>)}
        </ul>
        }
        <footer>
          {!(content === work.id) ?
          <AiOutlineArrowDown className='icons' onClick={() => setContent(work.id)} />
          :
          <AiOutlineArrowUp className='icons' onClick={() => setContent('')}/>
          }
        </footer>
      </VerticalTimelineElement>
    )
  }

  const display_education = (education) => {
    return (
      <VerticalTimelineElement key={education.id} className='vertical-timeline-element--education' date={education.dates} iconStyle={{background: 'purple', color: 'white'}}>
        <h3 className='exp__title'>Education</h3>
        <h4>{education.uni}</h4>
        <div>GPA: {education.gpa}</div>
        <div>Math GPA: {education.msngpa}</div>
        {(content === education.id) &&
        <>
          <h4 className='edu__header'>Completed Coursework: </h4>
          <ul className='experience__list'>
            {education.completed_coursework.map((c) => 
            <li key={c}>
              {c}
            </li>)}
          </ul>
          <h4 className='edu__header'>Organizations Joined: </h4>
          <ul className='experience__list'>
            {education.orgs.map((o) => 
            <li key={o}>
              {o}
            </li>)}
          </ul>
        </>
        }
        <footer>
          {!(content === education.id) ?
          <AiOutlineArrowDown className='icons' onClick={() => setContent(education.id)} />
          :
          <AiOutlineArrowUp className='icons' onClick={() => setContent('')}/>
          }
        </footer>
      </VerticalTimelineElement>
    )
  }

  const display = (element) => {
    if(element.timeline_type === 'edu'){
      return (
        display_education(element)
      )
    }
    else if(element.timeline_type === 'work'){
      return (
        display_work(element)
      )
    }
    else if(element.timeline_type === 'cert'){
      return (
        display_cert(element)
      )
    }
  }

  const display_all = () => {
    return (
      timeline.map((element) => display(element))
    )
  }

  return (
    <section id="experience">
      <h5>My Recent Experience</h5>
      <h2>Experience Timeline</h2>
      <div className='container experience__container'>
        <div className='start__icon'><FaMapMarkerAlt/></div>
        <div className='start__icon'>Present</div>
        <VerticalTimeline lineColor="black">
          {display_all()}
        </VerticalTimeline>
        <div className='start__icon'><GrHomeRounded /></div>
        <div className='start__icon'>2014</div>
      </div>
    </section>
  )
}

export default Experience