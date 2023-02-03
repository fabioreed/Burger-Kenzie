import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Inter', sans-serif;

        list-style: none;
    }

    button {
        cursor: pointer;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --gray-100: #333333;
        --gray-50: #828282;
        --grey-40: #BDBDBD;
        --grey-30: #828282;
        --grey-20: #E0E0E0;
        --grey-10: #F5F5F5;
        --grey-0: #FFF;

        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
    }
`
export default GlobalStyle