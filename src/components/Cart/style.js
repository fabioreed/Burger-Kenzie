import styled from "styled-components"

export const ListCart = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    max-width: 360px;
    width: 100%;

    background-color: var(--grey-10);

    flex-shrink: 0;

    @media (min-width: 769px) {
        width: 382px;
        margin: 0;
        gap: 1rem;

        overflow-y: auto;
        height: 280px;
    }
`

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 380px;

    @media (min-width: 769px) {
        margin: 0;
        width: 50%;
    }
`