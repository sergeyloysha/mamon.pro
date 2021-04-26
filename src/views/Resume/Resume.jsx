import React, { useEffect, useState } from 'react'

import resumes from '../../data/resumes'
import history from '../../history'

const Resume = ({ match: { params: { username, id } }, ...props }) => {
  const [resume, setResume] = useState(null)

  useEffect(() => {
    if(resumes[id]) {
      setResume(resumes[id])
    } else {
      history.push('/')
    }
  }, [])

  if(resume === null) return null

  return (
    <div className='wrapper'>
      <div className='page'>
        <div className="container">
          <div className="resume">
            <div className="resume__head">
              <p>{resume.position}</p>
              <h1>{resume.firstName} {resume.lastName}</h1>
            </div>
            <div className="resume__body">
              <div className="resume__info">
                <h2>Profile</h2>
                <React.Fragment dangerouslySetInnerHTML={{ __html: resume.summary }} />

                <h2>Education</h2>
                {resume.education.map((item, key) => (
                  <div key={key}>
                    <div className="resume__row">
                      <h3>{item.name}</h3>
                      <p>{item.yearFrom} – {item.yearTo}</p>
                    </div>
                    <p>{item.value}</p>
                  </div>
                ))}

                <h2>Employment</h2>
                {resume.projects.map((item, key) => (
                  <div key={key}>
                    <div className="resume__row">
                      <h3>{item.environment}</h3>
                      <p>{item.dateFrom} – {item.dateTo}</p>
                    </div>
                    <p>{item.role}</p>
                    <p>{item.summary}</p>
                  </div>
                ))}
              </div>

              <div className="resume__contact">
                <h2>Contacts</h2>
                {resume.contacts.map((item, key) => (
                  <div key={key}>
                    <h3>{item.key}</h3>
                    <a href={item.value}>{item.value}</a>
                  </div>
                ))}

                <h2>Languages</h2>
                {resume.languages.map((item, key) => (
                  <div className="resume__skill" key={key}>
                    <h3>{item.name}</h3>
                    <p>-</p>
                    <div className="resume__skillProgress" />
                    <div className="resume__skillLine" style={{ width: `${item.level}%` }} />
                  </div>
                ))}

                <h2>Skills</h2>
                {resume.skills.map((item, key) => (
                  <div className="resume__skill" key={key}>
                    <h3>{item.name}</h3>
                    <p>Expert</p>
                    <div className="resume__skillProgress" />
                    <div className="resume__skillLine" style={{ width: `${item.level}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
