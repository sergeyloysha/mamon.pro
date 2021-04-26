import React, { useEffect, useState } from 'react'

const Resume = ({ match: { params: { username, id } }, ...props }) => {
  console.log('props', username, id);

  useEffect(() => {

  }, [])

  return (
    <div className='wrapper'>
      <div className='page'>
        <div className="container">
          <div className="resume">
            <div className="resume__head">
              <p>Front-end developer</p>
              <h1>Andrey Pitunov</h1>
            </div>
            <div className="resume__body">
              <div className="resume__info">
                <h2>Profile</h2>
                <p>Graphic designer with +8 years of experience in branding and print design. Skilled at Adobe Creative Suite (Photoshop, Illustrator, InDesign) as well as sketching and hand drawing. Supervised 23 print design projects that resulted in an increase of 32% in savings.</p>

                <h2>Education</h2>
                <div className="row">
                  <h3>Yanka Kupala State University of Grodno</h3>
                  <p>Sep 2009 – Aug 2013</p>
                </div>
                <p>Master of Graphic Design, GPA: 3.8/4.0</p>
                <div className="row">
                  <h3>Los Angeles University</h3>
                  <p>Sep 2013 – Aug 2015</p>
                </div>
                <p>Master of Arts, GPA: 3.4/4.0</p>

                <h2>Employment</h2>
                <div className="row">
                  <h3>UI Designer at Market Studios</h3>
                  <p>Oct 2015 – Jan 2016</p>
                </div>
                <p>Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites.</p>
                <div className="row">
                  <h3>Graphic Designer at FireWeb</h3>
                  <p>Oct 2015 – Jan 2016</p>
                </div>
                <p>Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites.</p>
              </div>
              <div className="resume__contact">
                <h2>Contacts</h2>

                <h3>Email</h3>
                <a href="mailto:andrey.pitunov@mamon.pro">andrey.pitunov@mamon.pro</a>

                <h3>Phone</h3>
                <a href="tel:+375 (25) 768-40-23">+375 (25) 768-40-23</a>

                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/andreypitunov">/in/andreypitunov</a>

                <h3>GitHub</h3>
                <a href="https://github.com/andreypitunov">@andreypitunov</a>

                <h2>Skills</h2>
                <div className="resume__skill">
                  <h3>Figma</h3>
                  <p>Expert</p>
                  <div className="resume__skillProgress" />
                  <div className="resume__skillLine" style={{ width: '70%' }} />
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
