import React, { useState, useEffect } from "react";

import { Circle } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";

import { motion } from "framer-motion";

const MotionBox = motion(Circle);

export const ScrollToTop = React.memo(() => {
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
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <MotionBox whileHover={{ scale: 1.15 }}>
      <Circle
        as="button"
        className="scrollTop"
        backgroundColor="white"
        style={{ display: showScroll ? "flex" : "none" }}
        _hover={{ shadow: "xl" }}
      >
        {/* need to find out why color='linkedinBlue' not working */}
        <FaArrowCircleUp onClick={scrollTop} size="50px" color="#01A0DC" />
      </Circle>
    </MotionBox>
  );
});
