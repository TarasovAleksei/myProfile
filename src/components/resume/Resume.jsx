import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `React developer`,
    jobType: `training/Remote`,
    jobDuration: `June 2021 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "IT-Incubator",
    jobDescription: `Training in it-incubator on React developer using a stack of modern technologies: React-redux,
     React-hooks, redux-thunks, TypeScript, Jest, Storybook etc.`,
  },
  {
    jobPosition: `Front-end developer`,
    jobType: `training/Remote`,
    jobDuration: `July 2020 - June 2021`,
    timeDuraton: `Part Time`,
    compnayName: "GeekBrains by mail.ru",
    jobDescription: `Training for a front-end developer in GeekBrains. Learning Html, Css, Javascript, React.js , Vue.js , Node.js, webpack.`,
  },
  {
    jobPosition: `Head of the Department`,
    jobType: `on the territory of the employer`,
    jobDuration: `Feb 2018 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "TSK Mosenergo",
    jobDescription: `Designing the state using 1C accounting. Making the 1C configurator, designing and developing external reports.`,
  },
];

const educatonContent = [
  {
    passingYear: "2021",
    degreeTitle: "React developer",
    instituteName: "IT-Incubator",
  },
  {
    passingYear: "2020-2021",
    degreeTitle: "Front-end developer",
    instituteName: "GeekBrains by Mail.ru",
  },
  {
    passingYear: "2005-2010",
    degreeTitle: "Economist",
    instituteName: "Tver State University",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="separated"

          ></div>

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
