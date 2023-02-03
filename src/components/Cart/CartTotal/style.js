import styled from "styled-components"

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: var(--grey-10);
    max-width: 360px;
    width: 100%;

    padding: 1rem;

    div {
        display: flex;
        justify-content: space-between;

        p {
            font-size: .9rem;
            font-weight: 600;
            color: var(--gray-100);
        }

        span {
            font-size: .9rem;
            font-weight: 600;
            color: var(--gray-50);
        }
    }

    button {
        height: 60px;

        border-radius: 8px;
        border: none;

        background-color: var(--grey-20);

        font-size: 1rem;
        font-weight: 600;
        color: var(--gray-50);

        transition: .4s ease;
    }

    button:hover {
        background-color: var(--grey-30);
        color: var(--grey-10);
    }
`