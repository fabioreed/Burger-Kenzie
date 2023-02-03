import styled from "styled-components";

export const ResultSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: .5rem 1rem;

    h3 {
        font-size: 1.1rem;
        color: var(--gray-100);
    }

    h3 > span {
        color: var(--grey-40);
    }

    button {
        background-color: var(--color-primary);

        color: var(--grey-10);

        border: none;
        border-radius: 8px;

        padding: .4rem 1rem;
        height: 40px;

        transition: .2s ease;
    }

    button:hover {
        background-color: var(--color-primary-50);
    }

    @media (min-width: 769px) {
        padding: .5rem 2rem;
        gap: 25rem;
        justify-content: flex-start;

        h3 {
            font-size: 1.6rem;
            color: var(--gray-100);
        }
    }
`