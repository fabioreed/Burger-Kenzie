import styled from "styled-components"

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    padding: 1.4rem 1rem;
    width: 100%;

    background-color: var(--grey-10);

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;

        padding: 1.4rem 2rem;
    }
`