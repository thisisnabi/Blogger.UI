import type { SVGProps } from 'react'
import * as React from 'react'

const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 54 40"
    {...props}
  >
    <g clipPath="url(#linkedin_svg__a)">
      <path
        fill="#717B8E"
        stroke="#fff"
        strokeWidth={0.3}
        d="M27.047 18.463v-1.649h-3.978q.03.807.03 3.692 0 3.183-.037 8.904h3.985v-7.05c0-.459.052-.83.166-1.1v-.002zm0 0-.004.007-.108.217h.412v-.144c.898-1.363 2.137-2.038 3.73-2.038 1.443 0 2.592.479 3.461 1.428.867.948 1.312 2.35 1.312 4.233v7.244h-3.986zm-10.27-7.278c.419-.388.966-.587 1.655-.587.677 0 1.21.196 1.616.577.417.393.628.906.628 1.551 0 .578-.202 1.052-.609 1.435-.418.394-.97.597-1.673.597h-.02c-.675 0-1.208-.202-1.613-.595-.407-.395-.611-.89-.611-1.495 0-.604.21-1.094.628-1.483Zm-.376 18.225V16.814h3.986V29.41z"
      />
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="#fff" d="M16 10h20v20H16z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgLinkedin
