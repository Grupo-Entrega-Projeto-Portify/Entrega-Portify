import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root{
    --color-primary: #11BCC7;

    --background: #FFFFFF;
    --header: #0F1411;
    --footer: #F5F5F5;

    --grey-1: #0F1411;
    --grey-0: #F5F5F5;

    --title: 64px;
    --title-2: 44px;

    --title-1: 18px;
    --title-2: 16px;
    --title-3: 14px;
    --title-4: 12px;

    --800: 800;
    --700: 700;
    --600: 600;
    --500: 500;
    --400: 400;
}

.darkMode:root{
    --color-primary: #11BCC7;
    --background: #0F1411;
    --header: #0F1411;
    --footer: #F5F5F5;

    --grey-1: #FFFFFF;
    --grey-0: #0F1411;

    --title: 64px;
    --title-2: 44px;

    --title-1: 18px;
    --title-2: 16px;
    --title-3: 14px;
    --title-4: 12px;

    --800: 800;
    --700: 700;
    --600: 600;
    --500: 500;
    --400: 400;

}


`;
