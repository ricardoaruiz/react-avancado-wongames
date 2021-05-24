import React from 'react'

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
    <S.Wrapper>
      {items.map(({ name, options, type }) => (
        <div key={name}>
          <Heading lineBottom lineColor="secondary" size="small" color="white">
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
        </div>
      ))}

      <Button size="medium" fullWidth onClick={handleFilter}>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
