import React, {useState} from "react";
import styled from "styled-components";

const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    background: rgba(0,0,0,0.5);
`;

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: transform(-50%, -50%);
    background: #fff;
    border-radius: 8px;
`

const ModalHeader = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ModalContent = styled.div`
    padding: 8px;
`;

const ModalFooter = styled.footer`
    padding: 8px;
`;

function Modal({title, state}) {
    if (!state) return;

    return (
        <Overlay>
            <ModalContainer>
                <ModalHeader>
                    <h4>{title}</h4>
                </ModalHeader>
                <ModalContent>
                    <p>Dummy content.</p>
                </ModalContent>
                <ModalFooter>
                    <button>Close</button>
                </ModalFooter>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal;