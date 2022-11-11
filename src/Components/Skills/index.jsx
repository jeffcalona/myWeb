import React from 'react'
import { ContainerScreen } from '../GlobalAssets/GlobalStyles'
import { Skill, SkillsContainer, SkillsContainer_ } from './SkillsStyles'

const Skills = () => {
  return (
    <ContainerScreen id='skills'>
      <SkillsContainer>
        <SkillsContainer_>
          <Skill backgorundColor='#86D4E9' columA='1' columB='2' rowA='1' rowB='4'>
            hola1
          </Skill>
          <Skill backgorundColor='#FFEF70' columA='2' columB='3' rowA='1' rowB='4'>
            hola2
          </Skill>
          <Skill backgorundColor='#67A65A' columA='3' columB='4' rowA='1' rowB='3'>
            hola3
          </Skill>
          <Skill backgorundColor='#C2EEEF' columA='1' columB='2' rowA='4' rowB='7'>
            hola4
          </Skill>
          <Skill backgorundColor='#1C1C1C' columA='2' columB='3' rowA='4' rowB='6'>
            hola5
          </Skill>
          <Skill backgorundColor='#78C8DE' columA='3' columB='4' rowA='3' rowB='6'>
            hola6
          </Skill>
          <Skill backgorundColor='#CDB4F4' columA='1' columB='2' rowA='7' rowB='9'>
            hola7
          </Skill>
          <Skill backgorundColor='#FCB5AA' columA='2' columB='3' rowA='6' rowB='9'>
            hola8
          </Skill>
          <Skill backgorundColor='#5A0F56' columA='3' columB='4' rowA='6' rowB='9'>
            hola9
          </Skill>
        </SkillsContainer_>
      </SkillsContainer>
    </ContainerScreen>
  )
}

export default Skills