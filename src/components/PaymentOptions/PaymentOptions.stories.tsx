import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import mock from './mock'
import PaymentOptions, { PaymentOptionsProps } from './PaymentOptions'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    cards: {
      control: {
        type: null
      }
    },
    handlePayment: {
      action: 'click'
    }
  },
  args: mock
} as Meta

const Container = styled.div`
  max-width: 40rem;
  padding: 2rem;
`

export const WithCardList: Story<PaymentOptionsProps> = (args) => (
  <Container>
    <PaymentOptions {...args} />
  </Container>
)

export const WithoutCardList: Story<PaymentOptionsProps> = () => (
  <Container>
    <PaymentOptions cards={undefined} handlePayment={() => ({})} />
  </Container>
)
