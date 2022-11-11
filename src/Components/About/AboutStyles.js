import styled from "styled-components";

export const AboutInfo = styled.div`
    position: absolute;
    width: 80%;
    z-index: 1;
`
export const AboutTitle = styled.h1`
    font-family: 'Rubik';
    color: ${({theme}) => theme.colorYellow};
    font-size: 65px;
    font-weight: 600;
    line-height: 70px;

    span {
        font-size: 85px;
        display: block;
    }
`
export const AboutDescription = styled.p`
    font-family: 'Rubik';
    color: ${({theme}) => theme.colorWhite};
    font-size: 20px;
    font-weight: 300;
    width: 45%;
    line-height: 25px;
`
export const BuuttonSquare = styled.button`
    border: 2px solid ${({theme}) => theme.colorYellow};
    background-color: rgba(0, 0, 0, 0);
    color: ${({theme}) => theme.colorWhite};
    padding: 15px 0;
    font-family: 'Nunito';
    font-weight: 600;
    font-size: 20px;
    margin: 20px 80px 20px 0;
    width: 170px;
    cursor: pointer;
`
export const SocialIcons = styled.div`
    display: flex;
    margin-top: 10px;
`
export const SocialIcon = styled.a`
    color: ${({theme}) => theme.colorWhite};
    font-size: 35px;
    margin-right: 15px;
`