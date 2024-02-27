import React, {useContext} from "react";
import styled from "styled-components";
import {ThemeContext} from "../layout/RootLayout";

const NavWrapper = styled.nav<{$background: string, $text: string}>`
    padding: 8px;
    background: ${props => props.$background};
    color: ${$props => $props.$text};
`;

const NavItemList = styled.ul`
    list-style: none;
    padding: 0px;
`

function Navbar() {
    const {colors} = useContext(ThemeContext);
    const {navbar} = colors;
    
    return (
        <NavWrapper $background={navbar.background} $text={navbar.text}>
            <NavItemList>
                <li>Kanban</li>
            </NavItemList>
        </NavWrapper>
    )
}

export default Navbar;