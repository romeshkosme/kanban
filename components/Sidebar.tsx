import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../layout/RootLayout";
import Modal from "./Modal";
import Portal from "./Portal";
import TestModal from "./TestModal";

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
        title: "Settings",
        link: "/settings"
    },
    {
        id: 3,
        title: "Projects",
        link: "#",
        children: [
            {
                id: 21,
                title: "Add New",
                icon: "",
                callback: () => {},
            }
        ]
    },
    {
        id: 4,
        title: "Logout",
        link: "#"
    }
]

function Sidebar() {
    const {colors} = useContext(ThemeContext);
    const {sidebar} = colors;

    return (
        <SidebarWrapper $background={sidebar.background} $text={sidebar.text}>
            <SidebarList>
                <SidebarItem Menu={MENU} hoverbg={sidebar.hoverBg} />
            </SidebarList>
        </SidebarWrapper>
    )
}

export default Sidebar;

function SidebarItem({Menu, hoverbg}) {
    return (
        <>
            {
                Menu.map((item) => {

                    return (
                        <>
                            <ListItem key={item.id} $hover={hoverbg}>
                                <Link to={item.link}>
             
                                {item.title}
                                </Link>
                            </ListItem>
                            {
                                item.children && <SidebarItem Menu={item.children} hoverbg={hoverbg} />
                            }
                        </>
                    )
                })
            }
        </>
    )
}