import axios from 'axios'
import classNames from 'classnames'
import Loading from 'components/loading'
import React, { ReactNode, useEffect, useMemo, useState } from 'react'

export type StateType<T> = {
  data?: T
  error?: any
  loading?: boolean
  setLoading?: () => void
  fetchData?: () => void
  abortController: AbortController
}

type Props<T> = {
  request?: (abortSignal?: AbortSignal) => Promise<T>
  children: (data: T | null, state: StateType<T>) => ReactNode
  handleError?: boolean
  handleLoading?: boolean
  handleEmptyData?: boolean
  deps?: any[]
  loadingClassName?: string
}

function FetchData<T>(props: Props<T>) {
  const {
    deps = [],
    request,
    children,
    handleEmptyData = true,
    handleLoading = true,
    loadingClassName,
    handleError = true,
  } = props

  const [data, setData] = useState<T | undefined>()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const abortController = useMemo(() => new AbortController(), deps)

  const fetchData = () => {
    setLoading(true)
    setError(null)

    if (typeof request === 'function') {
      return request(abortController.signal)
        .then((response) => {
          setLoading(false)
          setData(response)
          return response
        })
        .catch((er) => {
          if (!axios.isCancel(er)) {
            setLoading(false)
            setError(er.toString())
          }
        })
    }
  }

  const states: StateType<T> = {
    data,
    error,
    loading,
    setLoading: () => setLoading(false),
    fetchData,
    abortController: abortController,
  }

  useEffect(() => {
    if (deps) {
      fetchData()

      return () => {
        if (typeof abortController.abort === 'function') abortController.abort()
      }
    }
  }, deps)

  if (handleEmptyData && !loading && !data) {
    return (
      <div
        className={classNames(
          'font-semibold w-full h-full items-center flex justify-center text-xl text-[#858C94]',
          loadingClassName
        )}
      >
        not found
      </div>
    )
  }

  if (loading && handleLoading) return <Loading />

  if (error && handleError) return <div>{error}</div>

  return (
    <>
      {typeof children === 'function' ? children(data || null, states) : null}
    </>
  )
}

export default FetchData
