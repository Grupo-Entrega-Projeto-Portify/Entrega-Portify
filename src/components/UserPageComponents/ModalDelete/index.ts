import styled from "styled-components"

export const StyledModalDelete = styled.div`
    background-color: #FFFFFF;

    height: 70%;
    width: 100%;

    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
    gap: 60px;

    h1 {
        font-weight: 700;
        font-size: 44px;
    }

    .headerDiv {
        width: 80%;
        height: 90px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 30px;
        margin-bottom: 10px;
    }

    .buttonClose {
        font-weight: 400;
        font-size: 30px;

        color: grey;

        border: none;
        background-color: transparent;

        padding-bottom: 30px;

        cursor: pointer;
        
        transition: 0.5s;
    }

    .buttonClose:hover {
        color: black;
    }

    span {
        font-size: 24px;
        font-weight: 500;
    }

    .styleButtons {
        width: 80%;
        height: 90px;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .buttonDelete {
        width: 150px;
        height: 55px;

        border-radius: 255px;

        background-color: var(--color-primary);

        border: none;

        color: #FFFFFF;

        font-weight: 700;
        font-size: 14px;

        transition: 0.5s;

        cursor: pointer;
    }

    .buttonDelete:hover {
        background-color: var(--color-primary-70);
    }

    .buttonCancel {
        width: 150px;
        height: 55px;

        border-radius: 255px;

        background-color: #FFFFFF;

        border: 1px solid var(--color-primary);

        font-weight: 700;
        font-size: 14px;

        cursor: pointer;

        font-weight: var(--700);

        color: var(--color-primary);

        transition: 0.5s;
    }

    .buttonCancel:hover {
        background-color: var(--color-primary-70);

        color: #ffffff;
    }
`

export const StyledDiv = styled.div`

    .trash {
        color: var(--color-primary);

        font-size: 30px;

        cursor: pointer;
    }
`