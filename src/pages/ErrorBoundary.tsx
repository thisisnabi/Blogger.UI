import { Component, ErrorInfo, ReactNode } from 'react'

type Props = { children?: ReactNode }

export default class ErrorBoundary extends Component<Props> {
  state: Readonly<{ hasError: boolean }>

  constructor(props: any) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
