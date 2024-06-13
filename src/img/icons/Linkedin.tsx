import type { SVGProps } from 'react'
import * as React from 'react'

const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#linkedin_svg__a)">
      <path
        fill="currentColor"
        d="M0 3.202q0-1.16.81-1.912Q1.623.538 2.92.538q1.275 0 2.062.74.81.766.81 1.993 0 1.113-.787 1.853-.81.765-2.131.765h-.024q-1.273 0-2.061-.765Q0 4.36 0 3.202m.301 20.27V7.997h5.143v15.475zm7.992 0h5.143v-8.641q0-.81.186-1.25a3.36 3.36 0 0 1 .984-1.333q.66-.544 1.657-.544 2.595 0 2.594 3.498v8.27H24v-8.873q0-3.428-1.622-5.2-1.621-1.773-4.285-1.773-2.99 0-4.657 2.572v.046h-.023l.023-.046v-2.2H8.293q.047.74.047 4.61 0 3.868-.047 10.864"
      />
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgLinkedin
