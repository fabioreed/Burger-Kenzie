import styled from "styled-components";

export const Card = styled.li`
    figure {
        width: 100%;
        height: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        background-color: var(--grey-10);

        border-radius: 5px;
    }
    
    img {
        width: 100px;
        object-fit: contain;
    }

    :hover {
        filter: brightness(1.1);
        transform: scale(.9);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .8rem;

        height: 50%;
        padding: 1.2rem 1.3rem;

        h3 {
            font-size: 1rem;
            font-weight: 700;
            color: var(--gray-100);
        }

        span {
            font-size: .6rem;
            font-weight: 400;
            color: var(--gray-50);
        }

        p {
            font-size: .8rem;
            font-weight: 600;
            color: var(--color-primary)
        }

        button {
            /* height: 40px; */
            height: 2.7rem;

            /* width: 106px; */
            width: 6.6rem;

            border-radius: 8px;
            border: none;

            background-color: var(--color-primary);

            font-size: .8rem;
            font-weight: 600;
            color: var(--grey-10);

            transition: .4s ease;;
        }

        button:hover {
            background-color: var(--color-primary-50);
        }
    }

    transition: all .2s ease-in-out;
    border: .4px solid var(--grey-20);
    border-radius: 5px;
    flex-shrink: 0;
    /* width: 300px; */
    width: 15.6rem;
    /* height: 346px; */
    height: 20.6rem;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`