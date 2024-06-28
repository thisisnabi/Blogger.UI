import BaseInput from 'pages/components/BaseInput'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [search, setSearch] = useState<string>()

  //
  useEffect(() => {
    setSearch(searchParams.get('search') || '')
  }, [window.location.pathname])

  return (
    <BaseInput
      value={search}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event?.target?.value)
      }}
      containerClassName={'shadow-md'}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          navigate({
            pathname: '/',
            // @ts-ignore
            search: `search=${event?.target?.value}`,
          })
        }
      }}
    />
  )
}

export default Search
