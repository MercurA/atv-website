import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {useMediaQuery} from '../../hooks/useMediaQuery'
import { NavContainer, NavItemContainer, NavItem } from './styles'

const navItems = Object.freeze({
    home: "Home",
    photoGallery: "Galerie Poze",
    contact: "Contact"
})

const Navigation = ({handleMenuClick}) => {
    const isPageWide = useMediaQuery('(min-width: 800px)')

    const renderMenuItems = ()  => {
        return isPageWide && Object.values(navItems).map(((item) => (
            <NavItem key={item} onClick={handleMenuClick}>{item}</NavItem>
        )))
    }

    return (
        <NavContainer data-testid={'menu'}>
            <NavItemContainer isPageWide={isPageWide}>
                {renderMenuItems()}
            </NavItemContainer>
        </NavContainer>
    )
}

Navigation.propTypes = {
    handleMenuClick: PropTypes.func
}

export default Navigation;