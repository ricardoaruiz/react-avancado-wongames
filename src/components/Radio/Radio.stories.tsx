import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import Radio from './Radio'

import { RadioProps } from './Radio'
import * as RadioStyles from './Radio.styles'

export default {
  title: 'Radio',
  component: Radio,
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
  ${RadioStyles.Wrapper} {
    margin-bottom: 2rem;
  }
`

export const Basic: Story<RadioProps> = (args) => (
  <Container>
    <Radio {...args} defaultChecked value="unique" name="unique" />
  </Container>
)
Basic.args = {
  label: 'Option',
  labelFor: 'option'
}

export const Multiple: Story<RadioProps> = (args) => (
  <Container>
    <Radio
      {...args}
      label="Option 1"
      labelFor="option1"
      name="option"
      value="option1"
      defaultChecked
    />
    <Radio
      {...args}
      label="Option 2"
      labelFor="option2"
      name="option"
      value="option2"
    />
    <Radio
      {...args}
      label="Option 3"
      labelFor="option3"
      name="option"
      value="option3"
    />
  </Container>
)
