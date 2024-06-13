import {Component, ErrorInfo, ReactNode} from 'react'

type Props = { children?: ReactNode }

export default class ErrorBoundary extends Component<Props> {
  state: Readonly<{ hasError: boolean }>

  constructor(props: any) {
    super(props)

    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error: any) {
    console.log(error)
    // Update state so the next render will show the fallback UI.
    return {hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log({error, errorInfo})
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
