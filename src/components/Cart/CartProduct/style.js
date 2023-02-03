import styled from "styled-components"

export const LittleCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: .4rem 1.2rem;
    width: 100%;

    border-bottom: 1.4px solid var(--grey-20);

    img {
        width: 55px;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: .3rem;

        h3 {
            font-size: 1rem;
            font-weight: 700;
            color: var(--grey-100);
        }

        span {
            font-size: .73rem;
            font-weight: 400;
            color: var(--gray-50);
        }
    }

    button {
        border: none;
        background: transparent;

        color: var(--grey-40);

        transition: .1s ease;
    }

    button:hover {
        color: var(--gray-50);

        border-bottom: 1.3px solid var(--gray-50);
    }
`