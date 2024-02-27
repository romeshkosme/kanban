import React, {createContext} from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useColors from "../hooks/useColors";

const LayoutWrapper = styled.main`
    height: 98vh;
`;

const SidebarContainer = styled.section`
    display: flex;
    height: calc(100vh - 35px);
`;

const OutletWrapper = styled.div`
    background: #f2f2fz;
    padding: 8px;
    width: 100%;
`;
export const ThemeContext = createContext({});

function RootLayout() {
    const [colors, setColors, reset] = useColors();
    
    return (
        <ThemeContext.Provider value={{colors, setColors, reset}}>
            <LayoutWrapper>
                <Navbar />
                <SidebarContainer>
                    <Sidebar />
                    <OutletWrapper>
                        <Outlet />
                    </OutletWrapper>
                </SidebarContainer>
            </LayoutWrapper>
        </ThemeContext.Provider>    
    )
}

export default RootLayout;