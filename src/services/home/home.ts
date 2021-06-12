import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

const client = initializeApollo()

/**
 * Get Home data
 * @param todayDate
 * @returns Home data
 */
const getHomeData = async (todayDate: string): Promise<QueryHome> => {
  const {
    data: { banners, sections, newGames, upcomingGames, freeGames }
  } = await client.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: todayDate }
  })

  return { banners, sections, newGames, upcomingGames, freeGames }
}

export { getHomeData }
