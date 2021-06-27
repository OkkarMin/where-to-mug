import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Circle, Flex, Spacer, Text, Link, Box } from "@chakra-ui/react";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <Circle
      className="scrollTop"
      style={{ display: showScroll ? "flex" : "none" }}
      //size="128px"
      backgroundColor="#ffff"
    >
      <FaArrowCircleUp
        //className="scrollTop"
        onClick={scrollTop}
        style={{
          //height: 40,
          //display: showScroll ? "flex" : "none",
          fontSize: "50px",
          color: "#48cae4",
        }}
      />
    </Circle>
  );
};

export default ScrollArrow;
