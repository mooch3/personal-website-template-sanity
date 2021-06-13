import React from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  return (
    <>
      <InlineWidget
        url="https://calendly.com/kcal-consulting-"
        styles={{
          height: "1000px",
        }}
      />
    </>
  );
};

export default Calendar;
