import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Count = ({ end, suffix = "+" }) => {
  const [focus, setFocus] = useState(false);

  return (
    <CountUp start={focus ? 0 : null} end={end} duration={4} redraw={true}>
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                setFocus(true);
              }
            }}
          >
            <a>{suffix}</a>
          </VisibilitySensor>
        </div>
      )}
    </CountUp>
  );
};

export default Count;
