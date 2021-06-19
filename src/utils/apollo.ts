import React from 'react'
import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

// Creating apollo client
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: apolloCache
  })
}

/**
 * Initialize Apollo client
 * @param initialState
 * @returns
 */
export const initializeApollo = (initialState = null) => {
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // recuperando os dados do cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

/**
 * Hook para utilização do apollo client
 * @param initialState
 * @returns
 */
export const useApollo = (initialState = null) => {
  const store = React.useMemo(() => initializeApollo(initialState), [
    initialState
  ])

  return store
}
