import { gql } from '@apollo/client'
import { GameFragment, HighlightFragment } from 'graphql/fragments'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
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
