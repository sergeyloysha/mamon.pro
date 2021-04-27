import React, { useEffect, useState, useRef } from 'react'
import html2pdf from 'html2pdf.js'

import resumes from '../../data/cv'
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

  const refPdf = useRef(null)

  const downloadPdf = () => {
    const opt = {
      margin: 1,
      filename: `CV-${resume.firstName}-${resume.lastName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      // html2canvas:  { scale: 1 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }

    html2pdf().set(opt).from(refPdf.current.innerHTML).save()
  }

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
            <a href="/" className="cv-header__logo">
              <Logo />
            </a>
            <div className="cv-header__button">
              <div onClick={downloadPdf} className="cv-button">Download PDF</div>
            </div>
          </div>
        </header>
      </div>
      <div className="cv-page__content">
        <main className="cv-block">
          <div className="cv-block__inner" ref={refPdf}>
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
                    <div className="cv-section__title cv-section__title_green">
                      <h3>Education</h3>
                    </div>
                    <div className="cv-section__content">
                      {resume.education.map((item, key) => (
                        <div className="cv-section__item" key={key}>
                          <div className="cv-edutaction">
                            <div className="cv-education__head">
                              <div className="cv-education__name">{item.name}</div>
                              <div className="cv-education__years">{item.yearFrom} - {item.yearTo}</div>
                            </div>
                            <div className="cv-education__text">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title cv-section__title_purple">
                      <h3>Last experience</h3>
                    </div>
                    <div className="cv-section__content">
                      {resume.projects.map((item, key) => (
                        <div className="cv-section__item cv-section__item_large" key={key}>
                          <div className="cv-experience">
                            <div className="cv-experience__stack">{item.environment}</div>
                            <div className="cv-experience__meta">
                              <div className="cv-experience__item">{item.role}</div>
                              <div className="cv-experience__item">{item.dateFrom} – {item.dateTo}</div>
                            </div>
                            <div className="cv-experience__text">{item.summary}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              <div className="cv-block__side">
                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title cv-section__title_red">
                      <h3>Contacts</h3>
                    </div>
                    <div className="cv-section__content">
                      {resume.contacts.map((item, key) => (
                        <div className="cv-section__item cv-item" key={key}>
                          <div className="cv-item__title">
                            <h5>{item.name}</h5>
                          </div>
                          <div className="cv-item__content">
                            <p>{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title cv-section__title_blue">
                      <h3>Languages</h3>
                    </div>
                    <div className="cv-section__content">
                      {resume.languages.map((item, key) => (
                        <div className="cv-section__item cv-item" key={key}>
                          <div className="cv-item__title">
                            <h5>{item.name}</h5>
                          </div>
                          <div className="cv-item__content">
                            <p>{languageLevels[item.level]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cv-block__section">
                  <div className="cv-section">
                    <div className="cv-section__title cv-section__title_orange">
                      <h3>Core Skills</h3>
                    </div>
                    <div className="cv-section__content">
                      {resume.skills.map((item, key) => (
                        <div className="cv-section__item cv-item" key={key}>
                          <div className="cv-item__title">
                            <h5>{item.name}</h5>
                          </div>
                          <div className="cv-item__content">
                            <div className="cv-progress">
                              <span style={{width: `${item.level}%`}}></span>
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
        </main>
      </div>
    </div>
  )
}

export default Resume
