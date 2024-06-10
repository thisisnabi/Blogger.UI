import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

type Props<T> = {
  children: (data: T | null, error: string | null) => React.ReactNode
  req: (abortSignal?: AbortSignal) => Promise<T>
  dependencies: any[]
}

function FetchData<T = any>(props: Props<T>) {
  const { children, dependencies, req } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [response, setResponse] = useState<T>()

  const abortController = useMemo(() => new AbortController(), [dependencies])

  const fetchData = () => {
    setIsLoading(true)
    return req(abortController?.signal)
      .then((res) => {
        setResponse(res)
        setIsLoading(false)
        return res
      })
      .catch((er) => {
        setError(er.toString)

        if (!axios.isCancel(er)) {
          setIsLoading(false)
        }
      })
  }

  useEffect(() => {
    fetchData().then()

    return () => {
      if (typeof abortController.abort === 'function') abortController.abort()
    }
  }, dependencies)

  if (error) return <div>error</div>

  if (isLoading) return <div>loading</div>

  return <>{children(response, error)}</>
}

export default FetchData
