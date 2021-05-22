/* eslint-disable react/display-name */
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from './Profile'

// Mock do next router
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('components/ProfileMenu', () => ({
  ProfileMenu: () => <div data-testid="Mock ProfileMenu" />
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem Ipsum</Profile>)

    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()
    expect(screen.getByText('My account')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
