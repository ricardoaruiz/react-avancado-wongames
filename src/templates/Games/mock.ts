import { QUERY_GAMES } from 'graphql/queries/games'

export const queryGames = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Loop Hero',
          slug: 'loop-hero',
          cover: {
            url: '/uploads/loop_hero_98d1e3f81e.jpg',
            __typename: 'UploadFile'
          },
          developers: [{ name: 'Four Quarters', __typename: 'Developer' }],
          price: 34.99,
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreGames = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Red dead redemption',
          slug: 'red-dead-redemption',
          cover: {
            url: '/uploads/cyberpunk_2077_a6a35e601b.jpg',
            __typename: 'UploadFile'
          },
          developers: [{ name: 'Stars', __typename: 'Developer' }],
          price: 134.99,
          __typename: 'Game'
        }
      ]
    }
  }
}
