import styled from "styled-components"

export const StyledInputSearch = styled.form`
    position: relative;

    input {
        height: 52px;
        width: 365px;

        border-radius: 8px;
        border: 1.8px solid var(--grey-20);

        padding: 1.5rem .9rem;

        ::placeholder {
            color: var(--grey-20);
        }

        :focus {
            outline: none;
            border: 2px solid var(--color-primary);
        }
    }

   

    button {
        height: 40px;
        width: 107px;

        border-radius: 8px;
        border: none;

        background-color: var(--color-primary);
        color: var(--grey-0);
        font-size: .8rem;

        transition: .4s ease;

        position: absolute;
        top: 6px;
        right: 7px;
    }

    button:hover {
        background-color: var(--color-primary-50);
    }

    @media (min-width: 769px) {
        
    }
`