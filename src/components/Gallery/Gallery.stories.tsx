import { Story, Meta } from '@storybook/react/types-6-0'

import mock from './mock'
import Gallery, { GalleryProps } from './Gallery'
import styled from 'styled-components'

export default {
  title: 'Gallery',
  component: Gallery,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Basic: Story<GalleryProps> = (args) => (
  <Container>
    <Gallery {...args} />
  </Container>
)
