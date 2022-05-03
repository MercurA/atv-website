import styled, { css } from 'styled-components'

const NavContainer = styled.div`
    width: 100%;
    height: 100px;
    padding: 35px 50px;
`
const NavItemContainer = styled.div`
    ${props => props.isPageWide &&
    css`
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
        `
    }
`

const NavItem = styled.div`
    height: 20px;
    width: 100px;
    padding: 0 5px;
    text-align: center;
`

export {
    NavContainer,
    NavItemContainer,
    NavItem
}