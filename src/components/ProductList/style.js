import styled from "styled-components"

export const StyledList = styled.ul`
    display: flex;
    gap: 1.2rem;
    
    overflow-x: auto;

    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 769px) {
        flex-wrap: wrap;
        margin: 0;
    }
`

export const MainSection = styled.section`
    @media (min-width: 769px) {
        display: flex;
        padding: 1rem;
        /* margin: 0; */
    }
`