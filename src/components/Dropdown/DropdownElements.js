import styled from "styled-components/macro";

export const dropdownMenu = styled.ul`
    width: 200px;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align:start;
`;

export const dropdownItem = styled.li`
    background: #252629;
    cursor: pointer;
    &:hover{
        background: #8a8b8c;
    }
`;