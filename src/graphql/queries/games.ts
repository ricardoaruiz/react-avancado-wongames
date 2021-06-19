import { gql, QueryHookOptions, QueryResult, useQuery } from '@apollo/client'
import { GameFragment, HighlightFragment } from 'graphql/fragments'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!, $start: Int) {
    games(limit: $limit, start: $start) {
      ...GameFragment
    }
  }

  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      id
      name
      short_description
      description
      slug
      price
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        url
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`

export const QUERY_RECOMMENDED_GAMES = gql`
  query QueryRecommendedGames {
    recommended {
      section {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }
    }
  }

  ${HighlightFragment}
  ${GameFragment}
`

export const QUERY_UPCOMMING_GAMES = gql`
  query QueryUpcommingGames($date: Date!) {
    showcase: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
    games(
      where: { release_date_gt: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }
  }

  ${HighlightFragment}
  ${GameFragment}
`

// Hooks
export const useQueryGames = (
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
): QueryResult<QueryGames, QueryGamesVariables> => {
  return useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options)
}
