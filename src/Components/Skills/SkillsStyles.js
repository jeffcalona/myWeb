import styled from "styled-components";

export const SkillsContainer = styled.div`
    width: 70%;
    height: 70%;
    /* display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr); */
`
export const SkillsContainer_ = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 1fr);
`

export const Skill = styled.div`
    background-color: ${props => props.backgorundColor};
    grid-column: ${props => props.columA} / ${props => props.columB};
    grid-row: ${props => props.rowA} / ${props => props.rowB};
`