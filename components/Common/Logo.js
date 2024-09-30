// https://react-svgr.com/playground/
import * as React from 'react'
import Image from 'next/image'

const Logo = (props) => (
  <Image
    src="/logo.png"
    alt="logo"
    width={40}
    height={40}
    style={{
      opacity: 1,
      borderRadius: '.5rem',
    }}
  />
)

export default Logo
