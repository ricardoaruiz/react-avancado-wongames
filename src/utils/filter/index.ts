/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExploreSidebarSection } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ExploreSidebarSection, 'type' | 'name'>[]
}

/**
 * Convert queryString to Strapi where pattern
 * @param param0
 * @returns strapi where
 */
export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  const obj: any = {}

  Object.keys(queryString)
    .filter((key) => key !== 'sort')
    .forEach((key) => {
      const item = filterItems.find((item) => item.name === key)
      const isCheckbox = item?.type === 'checkbox'

      obj[key] = !isCheckbox
        ? queryString[key]
        : { name_contains: queryString[key] }
    })

  return obj
}

/**
 * Convert queryString to filter object
 * @param param0
 * @returns filter object
 */
export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })
  return obj
}
