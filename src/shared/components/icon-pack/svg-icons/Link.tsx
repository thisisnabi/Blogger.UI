import type { SVGProps } from 'react'
import * as React from 'react'

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 54 40"
    {...props}
  >
    <path
      stroke="#717B8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M24 20h8m-1-4h2a4 4 0 0 1 0 8h-2m-6-8h-2a4 4 0 0 0 0 8h2"
    />
  </svg>
)
export default SvgLink
