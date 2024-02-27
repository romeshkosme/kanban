import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../layout/RootLayout";
import useColors from "../hooks/useColors";

const SettingsWrapper = styled.div`
    width: 900px;
    margin: auto;
`

const LabelInputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0px ;
`

const LabelWrapper = styled.label`
    flex: 0.5;
`

function Settings() {
    const {colors, setColors, reset} = useContext(ThemeContext);
    const {navbar, sidebar, container} = colors;

    const onHandleChange = (e) => {
        const {type} = e.target.dataset;
        const name = e.target.name;
        const value = e.target.value;
        const temp = {...colors};
        temp[type] = {...colors[type]};
        temp[type][name] = value;

        setColors(temp)
    }

    return (
        <SettingsWrapper>
            {/* navbar */}
            <div>
                <h4>Navbar</h4>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="navbg">Background</LabelWrapper>
                    <input 
                        type="color" 
                        value={navbar.background} 
                        onChange={onHandleChange}
                        name="background"
                        data-type="navbar" 
                        id="navbg" />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="navtext">Text</LabelWrapper>
                    <input 
                        type="color" 
                        value={navbar.text} 
                        onChange={onHandleChange}
                        name="text"
                        data-type="navbar"
                        id="navtext" 
                    />
                </LabelInputWrapper>
            </div>
            {/* sidebar */}
            <div>
                <h4>Sidebar</h4>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="sidebarbg">Background</LabelWrapper>
                    <input 
                        type="color" 
                        value={sidebar.background}
                        onChange={onHandleChange}
                        name="background" 
                        data-type="sidebar"
                        id="sidebarbg" 
                    />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="sidebartext">Text</LabelWrapper>
                    <input 
                        type="color" 
                        value={sidebar.text} 
                        onChange={onHandleChange}
                        name="text" 
                        data-type="sidebar"
                        id="sidebartext" 
                    />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="sidebarhover">Hover</LabelWrapper>
                    <input 
                        type="color" 
                        value={sidebar.hoverBg} 
                        onChange={onHandleChange}
                        name="hoverBg" 
                        data-type="sidebar"
                        id="sidebarhover" 
                    />
                </LabelInputWrapper>
            </div>
            {/* background */}
            <div>
                <h4>Container</h4>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="containerbg">Background</LabelWrapper>
                    <input 
                        type="color" 
                        value={container.background} 
                        onChange={onHandleChange}
                        name="background"
                        data-type="container" 
                        id="containerbg" 
                    />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="colbg">Column Background</LabelWrapper>
                    <input 
                        type="color" 
                        value={container.colBg} 
                        onChange={onHandleChange}
                        name="colBg" 
                        data-type="container"
                        id="colbg" 
                    />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="colheader">Colomn Header Background</LabelWrapper>
                    <input 
                        type="color" 
                        value={container.colHeaderBg} 
                        onChange={onHandleChange}
                        name="colHeaderBg" 
                        data-type="container"
                        id="colheader" 
                    />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="colheadertext">Column Header Text</LabelWrapper>
                    <input 
                        type="color" 
                        value={container.colHeaderText} 
                        onChange={onHandleChange}
                        name="colHeaderText" 
                        data-type="container"
                        id="colheadertext" 
                    />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="taskbg">Task Background</LabelWrapper>
                    <input 
                        type="color" 
                        value={container.taskBg} 
                        onChange={onHandleChange}
                        name="taskBg"
                        data-type="container" 
                        id="taskbg" 
                    />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="tasktitle">Task Title</LabelWrapper>
                    <input 
                        type="color" 
                        value={container.taskTitle} 
                        onChange={onHandleChange}
                        name="taskTitle" 
                        data-type="container"
                        id="tasktitle" 
                    />
                </LabelInputWrapper>
                <LabelInputWrapper>
                    <LabelWrapper htmlFor="taskdesc">Task Description</LabelWrapper>
                    <input 
                        type="color" 
                        value={container.taskDesc} 
                        onChange={onHandleChange}
                        name="taskDesc"
                        data-type="container" 
                        id="taskdesc" 
                    />
                </LabelInputWrapper>
            </div>
            {/* ACTION */}
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </SettingsWrapper>        
    )
}

export default Settings;