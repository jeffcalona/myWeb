import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.div`
    width: 100%;
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
`
export const NavContainer = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const BurgerIcon = styled.div`
    font-size: 40px;
    color: ${({theme}) => theme.colorWhite};
    cursor: pointer;
`
export const NavMenu = styled.ul`
    display: flex;
    width: 50%;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        width: 70%;
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`
export const NavItem = styled.li`
    list-style: none;
`
export const NavLinks = styled(LinkS)`
    font-family: 'Rubik';
    color: white;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    text-transform: capitalize;

    &.active {
        color: ${({theme}) => theme.colorYellow};
    }
`
/*Navbar Movile*/
export const NavContainerM = styled.div`
    width: 100%;
    height: 100vh;
    color: ${({theme}) => theme.colorBackground};
    position: absolute;
    top: 0;
    left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: all .5s ease-in-out;
    background-color: ${({theme}) => theme.colorBackGround};
    display: flex;
    justify-content: center;
`
export const NavMobile = styled.div`
    width: 90%;
    margin-top: 25px;
`
export const CloseBurgerIcon = styled.div`
    font-size: 38px;
    color: ${({theme}) => theme.colorWhite};
    position: absolute;
    cursor: pointer;
`
export const NavMenuM = styled.ul`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const NavItemM = styled.li`
    list-style: none;
    margin: 50px 0;
`
export const NavLinksM = styled(LinkS)`
    font-family: 'Rubik';
    color: ${({theme}) => theme.colorWhite};
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    text-transform: capitalize;

    &.active {
        color: ${({theme}) => theme.colorYellow};
    }
`