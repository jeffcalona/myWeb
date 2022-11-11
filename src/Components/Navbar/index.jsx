import React, { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import { BurgerIcon, CloseBurgerIcon, Nav, NavContainer, NavContainerM, NavItem, NavItemM, NavLinks, NavLinksM, NavMenu, NavMenuM, NavMobile } from './NavbarStyles'

const menuLinks = [
  {name: 'about'}, {name: 'skills'}, {name: 'dev'}, {name: 'desing'}, {name: 'contact'}
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <NavContainer>
        <BurgerIcon onClick={() => setIsOpen(!isOpen)}>
          <HiMenuAlt1 />
        </BurgerIcon>
        <NavMenu>
          {menuLinks.map((menuLink) => {
            return (
              <NavItem key={menuLink.name}>
                <NavLinks to={menuLink.name} spy={true} smooth={true} duration={800} >{menuLink.name}</NavLinks>
              </NavItem>
            )
          })}
        </NavMenu>
      </NavContainer>
      <NavContainerM isOpen={isOpen}>
        <NavMobile>
          <CloseBurgerIcon onClick={() => setIsOpen(!isOpen)}>
            <FaTimes />
          </CloseBurgerIcon>
          <NavMenuM>
            {menuLinks.map((menuLink) => {
              return (
                <NavItemM key={menuLink.name}>
                  <NavLinksM to={menuLink.name}>{menuLink.name}</NavLinksM>
                </NavItemM>
              )
            })}
          </NavMenuM>
        </NavMobile>
      </NavContainerM>
    </Nav>
  ) 
}

export default Navbar