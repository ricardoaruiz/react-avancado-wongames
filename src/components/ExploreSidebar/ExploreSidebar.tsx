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

export type ExplorerSidebarProps = {
  items: ExploreSideBarSection[]
}

export const ExploreSidebar = ({ items }: ExplorerSidebarProps) => {
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
              />
            ) : (
              <Checkbox
                name={name}
                label={label}
                labelFor={name}
                key={`${name}-${label}`}
              />
            )
          )}

          {/* {options.map(({ type, name, label, labelFor, value }) => {
            if (type === 'radio') {
              return (
                <Radio
                  label={label}
                  labelFor={labelFor}
                  value={value}
                  name={name}
                />
              )
            }
            if (type === 'checkbox') {
              return <Checkbox name={name} label={label} labelFor={labelFor} />
            }
          })} */}
        </div>
      ))}

      <Button size="medium" fullWidth>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
