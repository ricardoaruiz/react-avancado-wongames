import React from 'react'

import { Close } from '@styled-icons/material-outlined/Close'
import { FilterList } from '@styled-icons/material-outlined/FilterList'

import { Button, Checkbox, Heading, Radio } from 'components'

import * as S from './ExploreSidebar.styles'

export type ExploreSideBarOption = {
  label: string
  name: string
  value?: string | number
}

export type ExploreSideBarSection = {
  name: string
  type: 'radio' | 'checkbox'
  options: ExploreSideBarOption[]
}

type ExploreSideBarValues = {
  [field: string]: boolean | string | number | undefined
}

export type ExplorerSidebarProps = {
  items: ExploreSideBarSection[]
  initialValues?: ExploreSideBarValues
  onFilter: (values: ExploreSideBarValues) => void
}

export const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExplorerSidebarProps) => {
  const [values, setValues] = React.useState(initialValues)
  const [isOpen, setIsOpen] = React.useState(false)

  const handleFilter = React.useCallback(() => {
    onFilter(values)
  }, [onFilter, values])

  const handleChange = React.useCallback(
    (name: string, value: string | number | boolean | undefined) => {
      setValues((values) => ({ ...values, [name]: value }))
    },
    []
  )

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay />

      <S.IconWrapper>
        <FilterList size={38} role="button" onClick={() => setIsOpen(true)} />
        <Close size={38} role="button" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Options>
        {items.map(({ name, options, type }) => (
          <div key={name}>
            <Heading
              lineBottom
              lineColor="secondary"
              size="small"
              color="white"
            >
              {name}
            </Heading>

            {options.map(({ name, label, value }) =>
              type === 'radio' ? (
                <Radio
                  id={`${name}-${label}`}
                  name={name}
                  labelFor={`${name}-${label}`}
                  label={label}
                  value={value}
                  key={`${name}-${label}`}
                  defaultChecked={value === values[name]}
                  onChange={() => handleChange(name, value)}
                />
              ) : (
                <Checkbox
                  name={name}
                  label={label}
                  labelFor={name}
                  key={`${name}-${label}`}
                  isChecked={!!values[name]}
                  onCheck={(value) => handleChange(name, value)}
                />
              )
            )}
            <S.ExplorerDivider />
          </div>
        ))}
      </S.Options>

      <S.Footer>
        <Button size="medium" fullWidth onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
