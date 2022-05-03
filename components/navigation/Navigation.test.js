import { matchmedia } from '../../mocks/matchMedia'
import React from 'react'
import {render} from '@testing-library/react'
import Navigation from './Navigation'

const baseProps = {
    handleMenuClick: jest.fn()
}

const renderNavigationMenu = (props) => {
    return render(<Navigation {...baseProps} {...props} />)
}


describe('Navigation menu', () => {
    test('it should render with no problems', () => {
        const {getAllByTestId} = renderNavigationMenu()

        const menu = getAllByTestId('menu')
    })
})