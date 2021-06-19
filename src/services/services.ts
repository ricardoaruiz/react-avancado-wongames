import { initializeApollo } from 'utils/apollo'

export const apolloClient = initializeApollo()

export const getCache = () => {
  return apolloClient.cache.extract()
}
