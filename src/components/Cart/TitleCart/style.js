import styled from "styled-components"

export const TitleCartDiv = styled.div`
    display: flex;
    align-items: center;

    background-color: var(--color-primary);

    height: 65px;
    max-width: 360px;
    width: 100%;
    padding: 1.3rem 1.2rem;

    border-radius: 8px 8px 0 0;

    h2 {
        color: var(--grey-10);
        font-size: 1.1rem;
        font-weight: 700;
    }

    @media (min-width: 769px) {
        max-width: 360px;
        width: 100%;
    }
`
