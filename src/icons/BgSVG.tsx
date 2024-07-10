import React from "react";

const BgSVG = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D3557" stopOpacity={1} />
          <stop offset="100%" stopColor="#2A9D8F" stopOpacity={1} />
        </linearGradient>
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width="40"
          height="40"
          patternTransform="scale(2)"
        >
          <rect width="20" height="20" fill="#E76F51" />
          <rect x="20" y="20" width="20" height="20" fill="#E9ECEF" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#gradient)" />
      <circle cx="300" cy="400" r="150" fill="url(#pattern)" opacity="0.3" />
      <circle cx="900" cy="400" r="150" fill="url(#pattern)" opacity="0.3" />
      <circle cx="600" cy="200" r="200" fill="url(#pattern)" opacity="0.3" />
      <circle cx="600" cy="600" r="200" fill="url(#pattern)" opacity="0.3" />
    </svg>
  );
};

export default BgSVG;
