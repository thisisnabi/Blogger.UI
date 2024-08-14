import React from 'react'

type HeadingProps = {
  level: number
  children: React.ReactNode
}

const HeadTag = (props: HeadingProps) => {
  const { level, children } = props
  const text = React.Children.toArray(children).join('')
  const id = text.toLowerCase().replace(/\s+/g, '-')

  return React.createElement(`h${level}`, { id }, children)
}

export default HeadTag
