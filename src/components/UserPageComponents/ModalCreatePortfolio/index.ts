import styled from "styled-components"

export const StyledModalCreate = styled.div`
    background-color: #FFFFFF;

    width: 100%;
    height: 80%;

    margin: 0 auto;

    padding: 15px 30px 15px 30px;

    .titleModal {
        font-weight: 700;
        font-size: 44px;

        color: #000000;
    }

    .headerDiv {
        height: 90px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 20px;
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

    select {
        width: 100%;
        max-width: 526px;
        height: 60px;

        border-radius: 8px;

        border: 1px solid var(--color-primary);

        padding-left: 13px;

        outline: none;
    }

    .inputModal {
        width: 100%;
        max-width: 490px;
        height: 60px;
        
        border: 1px solid var(--color-primary);

        margin: 5px auto;

        padding-left: 15px;

        border-radius: 8px;

        outline: none;
    }

    .divCreateProject {
        display: flex;
        justify-content: end;

        margin-top: 15px;
    }

    .styleButtons {
        display: flex;
        justify-content: end;
        gap: 20px;

        margin-top: 20px;
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

        cursor: pointer;
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
    }
`