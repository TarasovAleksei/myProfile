import React, {useState} from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "HTML/CSS",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
  },
  {
    name: "React JS",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "TypeScript",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "JavaScript",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
  },
];

const Skills = () => {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
