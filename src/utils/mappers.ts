import { BannerProps, GameCardProps, HighlightProps } from 'components'
import {
  QueryHome_banners,
  QueryHome_freeGames,
  QueryHome_newGames,
  QueryHome_sections_freeGames_highlight,
  QueryHome_sections_popularGames_games,
  QueryHome_sections_popularGames_highlight,
  QueryHome_sections_upcomingGames_highlight,
  QueryHome_upcomingGames
} from 'graphql/generated/QueryHome'

const BASE_URL = 'http://localhost:1337'

export const mapBanner = (data: QueryHome_banners[]): BannerProps[] => {
  return data.map(
    ({ image, title, subtitle, button, ribbon }) =>
      ({
        img: `${BASE_URL}${image?.url}`,
        title,
        subtitle,
        buttonLabel: button!.label,
        buttonLink: button!.link,
        ...(ribbon && {
          ribbon: ribbon.text,
          ribbonColor: ribbon.color,
          ribbonSize: ribbon.size
        })
      } as BannerProps)
  )
}

export const mapGames = (
  data:
    | QueryHome_newGames[]
    | QueryHome_sections_popularGames_games[]
    | QueryHome_upcomingGames[]
    | QueryHome_freeGames[]
    | null
    | undefined
): GameCardProps[] | null | undefined =>
  data &&
  data?.map(
    ({ name, slug, cover, developers, price }) =>
      ({
        slug,
        image: `${BASE_URL}${cover?.url}`,
        title: name,
        developer: developers[0]?.name || null,
        normalPrice: price,
        withBorderRadius: false
      } as GameCardProps)
  )

export const mapHighlight = (
  data:
    | QueryHome_sections_popularGames_highlight
    | QueryHome_sections_upcomingGames_highlight
    | QueryHome_sections_freeGames_highlight
    | null
    | undefined
): HighlightProps | null | undefined =>
  data &&
  ({
    title: data?.title,
    subtitle: data?.subtitle,
    buttonLabel: data?.buttonLabel,
    buttonLink: data?.buttonLink,
    backgroundImage: `${BASE_URL}${data?.background?.url}`,
    floatImage: !data?.floatImage?.url
      ? null
      : `${BASE_URL}${data?.floatImage?.url}`,
    textAlign: data?.alignment
  } as HighlightProps)
