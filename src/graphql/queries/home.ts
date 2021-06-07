import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'

export const QUERY_HOME = gql`
  query QueryHome {
    banners(publicationState: LIVE) {
      ...BannerFragment
    }
  }

  ${BannerFragment}
`
