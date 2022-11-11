import styled from "styled-components";

export const ScrollBarVertical = styled.div`
    width: 8px;
    height: 35vh;
    top: 32%;
    right: 50px;
    background-color: ${({theme}) => theme.colorWhite};
    position: fixed;
    border-radius: 20px;
    overflow-y: hidden;
    z-index: 1;
`
export const ScrollBarVerticalYellow = styled.div`
    width: 100%;
    height: 20%;
    background-color: ${({theme}) => theme.colorYellow};
    border-radius: 20px;
    transform: ${({startScroll}) => `translateY(${startScroll}%)`};
    z-index: 1;

`