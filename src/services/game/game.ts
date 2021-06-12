import { initializeApollo } from 'utils/apollo'

import {
  QueryGameBySlug,
  QueryGameBySlugVariables,
  QueryGameBySlug_games
} from 'graphql/generated/QueryGameBySlug'

import {
  QueryGames,
  QueryGamesVariables,
  QueryGames_games
} from 'graphql/generated/QueryGames'

import { QueryRecommendedGames } from 'graphql/generated/QueryRecommendedGames'

import {
  QUERY_GAMES,
  QUERY_GAME_BY_SLUG,
  QUERY_RECOMMENDED_GAMES
} from 'graphql/queries/games'

import { getGamesProps } from './types'

const apolloClient = initializeApollo()

/**
 * Get all games
 * @param param0
 * @returns
 */
export const getGames = async ({
  limit = 9
}: getGamesProps): Promise<QueryGames_games[]> => {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit }
  })

  return data.games
}

/**
 * Get a game by your slug
 * @param slug
 * @returns
 */
export const getGame = async (
  slug: string
): Promise<QueryGameBySlug_games[]> => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug }
  })

  return data.games
}

/**
 * Get recommended games section data
 * @returns
 */
export const getRecommendedGames = async (): Promise<QueryRecommendedGames> => {
  const { data } = await apolloClient.query<QueryRecommendedGames>({
    query: QUERY_RECOMMENDED_GAMES
  })

  return data
}
