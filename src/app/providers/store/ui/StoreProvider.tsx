import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from '../model'

interface IProps {
    children: React.ReactNode
}

export const StoreProvider: React.FC<IProps> = ({children}) => {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }
  return <Provider store={storeRef.current}>{children}</Provider>
}