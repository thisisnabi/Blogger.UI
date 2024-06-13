import type { SVGProps } from 'react'
import * as React from 'react'

const SvgYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    fill={'currentColor'}
  >
    <path d="m20.803 3.764-5.294-.46a40.5 40.5 0 0 0-7.018 0l-5.294.46A3.48 3.48 0 0 0 0 7.251v9.499a3.48 3.48 0 0 0 3.197 3.487l5.294.46q1.748.152 3.509.152c1.761 0 2.345-.05 3.509-.152l5.294-.46A3.48 3.48 0 0 0 24 16.75V7.251a3.48 3.48 0 0 0-3.197-3.487M9 7.5a.499.499 0 0 1 .77-.421l7 4.5a.5.5 0 0 1 .001.841l-7 4.5a.5.5 0 0 1-.51.018A.5.5 0 0 1 9 16.5z" />
  </svg>
)
export default SvgYoutube
