import styled from "styled-components"

export const StyledModal = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;

    width: 100%;
    height: 100vh;

    background: rgba(0,0,0,.3);

    .modalController {
        position: relative;

        width: 100%;
        max-width: 370px;
        height: 342px;

        padding: 15px;
    }
`