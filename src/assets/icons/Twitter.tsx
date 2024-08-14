import type { SVGProps } from 'react'
import * as React from 'react'

const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    width="1em"
    height="1em"
    {...props}
    fill={'currentColor'}
  >
    <switch>
      <g>
        <path d="M42.5 31.2 66 6h-6L39.8 27.6 24 6H4l24.6 33.6L4 66h6l21.3-22.8L48 66h20zM12.9 10h8L59 62h-8z" />
      </g>
    </switch>
  </svg>
)
export default SvgTwitter
