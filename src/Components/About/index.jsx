import React from 'react'
import Avatar from '../GlobalAssets/Img/Avatar.png'
import { AiFillGithub, AiFillLinkedin, AiOutlineBehance, AiOutlineInstagram } from 'react-icons/ai'
import { AvatarImg, ContainerImg, ContainerScreen } from '../GlobalAssets/GlobalStyles'
import { AboutDescription, AboutInfo, AboutTitle, BuuttonSquare, SocialIcon, SocialIcons } from './AboutStyles'

const About = () => {
  return (
    <ContainerScreen id='about'>
        <ContainerImg>
            <AvatarImg src={Avatar} alt="JeffDev" />
        </ContainerImg>
        <AboutInfo>
            <AboutTitle>Hi, I'm <span>Jefferson</span></AboutTitle>
            <AboutDescription>I am a full stack developer with experience in web and mobile.<br />
            I'm passionate about design, art, photography and many other things that you'll see when you scroll down.<br />
            Have fun and if you are interested in contacting me don't hesitate to do it, I will be always ready to answer.</AboutDescription>
            <BuuttonSquare>Download CV</BuuttonSquare>
            <BuuttonSquare>Contact me</BuuttonSquare>
            <SocialIcons>
                <SocialIcon href="https://github.com/jeffcalona" target='_blank'>
                    <AiFillGithub />
                </SocialIcon>
                <SocialIcon href="https://www.behance.net/jeffcalona" target='_blank'>
                    <AiOutlineBehance />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/jeffcalona/" target='_blank'>
                    <AiFillLinkedin />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/jeffcalona/" target='_blank'>
                    <AiOutlineInstagram />
                </SocialIcon>
            </SocialIcons>
        </AboutInfo>
    </ContainerScreen>
  )
}

export default About