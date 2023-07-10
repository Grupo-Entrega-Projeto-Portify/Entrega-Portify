import styled from "styled-components"

export const StyledModal = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;

    width: 100%;
    height: 100vh;

    background: rgba(17,188,199,0.3);

    .modalController {
        position: relative;

        width: 100%;
        max-width: 600px;
        height: 600px;

        padding: 15px;
    }
`