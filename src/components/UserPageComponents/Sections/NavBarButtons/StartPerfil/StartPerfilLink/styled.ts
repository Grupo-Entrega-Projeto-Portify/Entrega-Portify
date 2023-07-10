import styled from "styled-components";



export const SectionStartPerfilLink = styled.section`
width: 100vw;


.perfilLink__div{
    margin: 70px auto;
    max-width: 700px;
    width: 95%;
}

.perfilLink__divCenter{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.perfilLink__h2{
font-size: 36px;
font-weight: var(--700);
}

.perfilLink__p{
color: rgba(0,0,0,0.5);
font-weight: var(--400);
}

.perfilLink__ancora{
    font-size: 36px;
    font-weight: var(--700);
    color: var(--color-primary);

    text-decoration: none;
    transition: 0.5s;
}

.perfilLink__ancora:hover{
    color: var(--color-primary-70);
}

`