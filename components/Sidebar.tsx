import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../layout/RootLayout";

const SidebarWrapper = styled.div<{$background: string, $text: string}>`
    background: ${props => props.$background};
    color: ${props => props.$text};
    width: 200px;
`
const SidebarList = styled.div`
    list-style: none;
    padding: 0px;
`
const ListItem = styled.li<{$hover: string}>`
    cursor: pointer;
    padding: 8px;

    &:hover {
        background: ${props => props.$hover};
    }
`
const MENU = [
    {
        id: 1,
        title: "Dashboard",
        link: "/dashboard"
    },
    {
        id: 2,
        title: "Projects",
        link: "#"
    },
    {
        id: 3,
        title: "Settings",
        link: "/settings"
    }
]
function Sidebar() {
    const {colors} = useContext(ThemeContext);
    const {sidebar} = colors;
    console.log(sidebar)
    return (
        <SidebarWrapper $background={sidebar.background} $text={sidebar.text}>
            <SidebarList>
                {
                    MENU.map((item) => (
                    <ListItem key={item.id} $hover={sidebar.hoverBg}>
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    </ListItem>
                    ))
                }
            </SidebarList>
        </SidebarWrapper>
    )
}

export default Sidebar;