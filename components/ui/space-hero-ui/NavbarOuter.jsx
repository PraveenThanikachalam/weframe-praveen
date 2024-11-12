import * as React from 'react';
const NavbarOuter = (props) => (
  <svg
    width="100%" // Set width to 100% to make it responsive
    height="auto" // Adjust height automatically to keep the aspect ratio
    viewBox="0 0 1135 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_b_16_2044)">
      <rect
        x={0.55}
        y={0.55}
        width={1133.9}
        height={81.9}
        rx={22.95}
        stroke="url(#paint0_angular_16_2044)"
        strokeOpacity={0.3}
        strokeWidth={0.9}
      />
      <rect
        x={0.55}
        y={0.55}
        width={1133.9}
        height={81.9}
        rx={22.95}
        stroke="url(#paint1_angular_16_2044)"
        strokeOpacity={0.3}
        strokeWidth={0.9}
      />
      <rect
        x={0.55}
        y={0.55}
        width={1133.9}
        height={81.9}
        rx={22.95}
        stroke="url(#paint2_radial_16_2044)"
        strokeOpacity={0.79}
        strokeWidth={0.9}
      />
    </g>
    <defs>
      <filter
        id="filter0_b_16_2044"
        x={-11.0999}
        y={-11.1}
        width={1157.2}
        height={105.2}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={5.6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_16_2044"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_16_2044"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_angular_16_2044"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(532.531 40.96) rotate(180) scale(203.287 39.96)"
      >
        <stop stopColor="#5BD4DD" />
        <stop offset={0.0739996} stopColor="white" stopOpacity={0} />
        <stop offset={0.844351} stopColor="white" stopOpacity={0} />
        <stop offset={1} stopColor="#5BD4DD" />
      </radialGradient>
      <radialGradient
        id="paint1_angular_16_2044"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(567.759 40.96) rotate(180) scale(240.38 188.108)"
      >
        <stop offset={0.438745} stopColor="#5BD4DD" stopOpacity={0} />
        <stop offset={0.497034} stopColor="#5BD4DD" />
        <stop offset={0.524823} stopColor="#5BD4DD" stopOpacity={0} />
        <stop offset={0.591054} stopColor="#5BD4DD" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint2_radial_16_2044"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(567.759 82.3253) rotate(-90.1592) scale(93.2534 276.629)"
      >
        <stop stopColor="#5BD4DD" />
        <stop offset={1} stopColor="#5BD4DD" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default NavbarOuter;
