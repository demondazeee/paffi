import styled from "styled-components";

export const UL = styled.ul`
    list-style: none;
`
export const LI = styled.li`
    padding: .5rem 1.2rem;
    transition: all .2s ease-out;

    :hover {
        background-color: #F7ACCF;
        border-radius: 100px;
    }
`
export const Link = styled.a`
    cursor: pointer;
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 600;
`