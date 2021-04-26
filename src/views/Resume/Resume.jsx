import React, { useEffect, useState } from 'react'

import resumes from '../../data/resumes'
import history from '../../history'
import { Logo } from '../../components/icons'
import './Resume.scss'

const languageLevels = [
  'A1 (Beginner)',
  'A2 (Elementary)',
  'B1 (Intermediate)',
  'B2 (Upper-Intermediate)',
  'C1 (Advanced)',
  'C2 (Proficiency)',
]

const Resume = ({ match: { params: { id } }, ...props }) => {
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
    <div className="cv-page">
      <div className="cv-page__header">
        <header className="cv-header">
          <div className="cv-header__inner">
            <div className="cv-header__logo">
              <Logo />
            </div>
            <div className="cv-header__button">
              <div className="cv-button">Download PDF</div>
            </div>
          </div>
        </header>
      </div>
      <div className="cv-page__content">
        <main className="cv-block">
          <div className="cv-block__inner">
            <div className="cv-block__head">
              <div className="cv-block__heading">
                <h1>{resume.firstName} {resume.lastName}</h1>
              </div>
              <div className="cv-block__position">{resume.position}</div>
            </div>
            <div className="cv-block__summary" dangerouslySetInnerHTML={{ __html: resume.summary }} />
            <div className="cv-block__main">
              <div className="cv-block__content">

                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title">
                      <h3>Education</h3>
                    </div>
                    <div className="cv-section__content">
                      {resume.education.map((item, key) => (
                        <div className="resume-section__item" key={key}>
                          <div className="item-education">
                            <div className="item-education__head">
                              <div className="item-education__name">
                                <h5>{item.name}</h5>
                              </div>
                              <div className="item-education__years">{item.yearFrom} - {item.yearTo}</div>
                            </div>
                            <div className="item-education__text">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title">
                      <h3>Last experience</h3>
                    </div>
                    <div className="cv-section__content">
                      {resume.projects.map((item, key) => (
                        <div className="resume-section__line resume-section__text" key={key}>
                          <h5>{item.environment}</h5>
                          <p>{item.dateFrom} – {item.dateTo}</p>
                          <p>{item.role}</p>
                          <p>{item.summary}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              <div className="cv-block__side">
                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title">
                      <h3>Contacts</h3>
                    </div>
                    <div className="cv-section__content">
                      {resume.contacts.map((item, key) => (
                        <div className="resume-section__line resume-section__text" key={key}>
                          <h5>{item.name}</h5>
                          <p>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title">
                      <h3></h3>
                    </div>
                    <div className="cv-section__content"></div>
                  </div>
                </div>

                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title">
                      <h3></h3>
                    </div>
                    <div className="cv-section__content"></div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )

  return (
    <div className="resume">
      <div className="resume__inner">
        <div className="resume__head">
          <div className="resume__position">{resume.position}</div>
          <div className="resume__heading">
            <h1>{resume.firstName} {resume.lastName}</h1>
          </div>
        </div>
        <div className="resume__content">
          <div className="resume__main">
            
          </div>

          <div className="resume__sidebar">

            <div className="resume__section">
              <div className="resume-section">
                <div className="resume-section__heading">
                  <h3>Languages</h3>
                </div>
                <div className="resume-section__content">
                  {resume.languages.map((item, key) => (
                    <div className="resume-section__line resume-section__text" key={key}>
                      <h5>{item.name}</h5>
                      <span>{languageLevels[item.level]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="resume__section">
              <div className="resume-section">
                <div className="resume-section__heading">
                  <h3>Skills</h3>
                </div>
                <div className="resume-section__content">
                  <div className="resume-section__text">
                    {resume.skills.map((item, key) => (
                      <p key={key}>
                        <h5>{item.name}</h5>
                        <span>Expert</span>
                        <div className="resume__skillProgress" />
                        <div className="resume__skillLine" style={{ width: `${item.level}%` }} />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
