import styled from "styled-components"

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .7rem;

    margin: 3rem auto;

    h2 {
        font-size: .9rem;
        color: var(--gray-100);
    }

    p {
        font-size: .7rem;
        color: var(--grey-40);
    }

    @media (min-width: 769px) {
        margin: auto auto;

        h2 {
            font-size: 1.1rem;
        }

        p {
            font-size: .8rem;
        }
    }
`