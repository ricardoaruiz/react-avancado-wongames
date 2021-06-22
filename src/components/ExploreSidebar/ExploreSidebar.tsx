import { useState } from 'react'
import { Close } from '@styled-icons/material-outlined/Close'
import { FilterList } from '@styled-icons/material-outlined/FilterList'
import xor from 'lodash.xor'

import { Heading, Button, Checkbox, Radio } from 'components'

import * as S from './ExploreSidebar.styles'
import { ParsedUrlQueryInput } from 'querystring'

export type ExploreSidebarSection = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

export type ExploreSidebarProps = {
  items: ExploreSidebarSection[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

export const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleRadioChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleCheckboxChange = (name: string, value: string) => {
    const currentList = (values[name] as []) || []
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }))
  }

  const handleFilter = () => {
    onFilter(values)
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )}
                  onCheck={() => handleCheckboxChange(item.name, field.name)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadioChange(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
