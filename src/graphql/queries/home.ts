import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    banners(publicationState: LIVE) {
      image {
        url
      }
      title
      subtitle
      button {
        label
        link
      }
      ribbon {
        text
        color
        size
      }
    }
  }
`
