"use client";

import styled from "@emotion/styled";
const breakpoints = {
  sm: "@media (min-width: 300px) and (max-width: 430px)", // Mobile
  smm: "@media (min-width: 430px) and (max-width: 600px)", // Mobile
  md: "@media (min-width: 601px) and (max-width: 1024px)", // Tablet
  lg: "@media (min-width: 1025px)", // Desktop
};
const Head1 = styled.span((props) => ({
  position: props.position,
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  textAlign: props.textAlign || "center",
  width: props.width,

  // Default font size
  fontSize: props.fontSize?.lg || "3rem",

  // Breakpoint-specific font sizes
  [breakpoints.md]: {
    fontSize: props.fontSize?.md || "2.5rem",
  },
  [breakpoints.smm]: {
    fontSize: props.fontSize?.smm || "2rem",
  },
  [breakpoints.sm]: {
    fontSize: props.fontSize?.sm || "1.5rem",
  },
}));


const Head2 = styled.span((props) => ({
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  width: props.width,
  textAlign: props.textAlign || "center",
  fontSize: "5rem",
}));

const Head3 = styled.span((props) => ({
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  textAlign: props.textAlign || "center",
  width: props.width,
  fontSize: "1.8rem",
}));

const Head4 = styled.span((props) => ({
  color: props.color || "#379237",
  fontWeight: props.fontWeight || "bold",
  textAlign: props.textAlign || "center",
  width: props.width,
  fontSize: "1.3rem",
}));

export { Head1, Head2, Head3, Head4 };
