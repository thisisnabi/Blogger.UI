import React, { createContext, useState } from 'react'

export interface IHeader {
  id: string
  level: number
  text: string
}

type ContextType = {
  headers: IHeader[]
  setHeaders: React.Dispatch<React.SetStateAction<IHeader[]>>
}

export const MyContext = createContext<ContextType>({
  headers: [],
  setHeaders: () => {},
})

const Context = ({ children }: { children: React.ReactNode }) => {
  const [headers, setHeaders] = useState<IHeader[]>([])
  console.log(headers)
  return (
    <MyContext.Provider value={{ headers, setHeaders }}>
      {children}
    </MyContext.Provider>
  )
}

export default Context
