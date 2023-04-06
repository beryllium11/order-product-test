import React from "react";
import Col from "react-bootstrap/Col";
import { HeaderWrapper } from "../mainStyled/mainStyled";

export const Header = () => {
  // Function to format 1 in 01
  const zeroFill = (n: number) => {
    return ("0" + n.toString()).slice(-2);
  };

  // Creates interval
  const interval = setInterval(() => {
    // Get current time
    const now = new Date();

    // Format date as in mm/dd/aaaa hh:ii:ss
    const dateTime =
      zeroFill(now.getMonth() + 1).toString() +
      "/" +
      zeroFill(now.getUTCDate()).toString() +
      "/" +
      now.getFullYear().toString() +
      " " +
      zeroFill(now.getHours()).toString() +
      ":" +
      zeroFill(now.getMinutes()).toString() +
      ":" +
      zeroFill(now.getSeconds()).toString();

    // Display the date and time on the screen using div#date-time
    const clock = document.getElementById("clock");
    if (clock != null) {
      clock.innerHTML = dateTime;
    }
  }, 1000);
  return (
    <HeaderWrapper>
      <Col>
        <div id="clock"></div>
      </Col>
    </HeaderWrapper>
  );
};
