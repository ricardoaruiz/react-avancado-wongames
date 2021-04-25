/* eslint-disable react/display-name */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from './Base'

// Criando mock dos componentes que não devem ser testados no template base
jest.mock('components/Menu', () => ({
  Menu: () => <div data-testid="Mocked Menu" />
}))

jest.mock('components/Footer', () => ({
  Footer: () => <div data-testid="Mocked Footer" />
}))

describe('<Base />', () => {
  it('should render menu children and footer', () => {
    renderWithTheme(
      <Base>
        <div data-testid="Base Children" />
      </Base>
    )

    expect(screen.getByTestId('Mocked Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Base Children')).toBeInTheDocument()
    expect(screen.getByTestId('Mocked Footer')).toBeInTheDocument()
  })
})
