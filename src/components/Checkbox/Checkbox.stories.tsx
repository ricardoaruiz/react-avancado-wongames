import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import Checkbox, { CheckboxProps } from './Checkbox'
import * as CheckboxStyles from './Checkbox.styles'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    labelColor: {
      defaultValue: 'white',
      control: {
        type: 'select',
        options: ['black', 'white']
      }
    },
    onCheck: {
      action: 'checked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Container = styled.div`
  ${CheckboxStyles.Wrapper} {
    margin-top: 2rem;
  }
`

export const Basic: Story<CheckboxProps> = (args) => (
  <Container>
    <Checkbox
      {...args}
      label="Action"
      labelFor="action"
      name="action"
      isChecked
    />
    <Checkbox
      {...args}
      label="Adventure"
      labelFor="adventure"
      name="adventure"
    />
    <Checkbox {...args} label="Strategy" labelFor="strategy" name="strategy" />
  </Container>
)
