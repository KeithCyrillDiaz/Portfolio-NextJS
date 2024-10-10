import { AboutMe } from '@/components/About/AboutMe'
import { Education } from '@/components/About/Education'
import { Hobbies } from '@/components/About/Hobbies'
import { TechnicalSkills } from '@/components/About/TechnicalSkills'
import { BackgroundColor } from '@/components/BackgroundColor'
import { Container } from '@/components/Container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/Header'
import React from 'react'

export default function About() {
  return (
    <BackgroundColor>
       <Container>
        <Header focus='About'/>
        <AboutMe/>
        <Education/>
        <TechnicalSkills/>
        <Hobbies/>
        <Footer/>
      </Container>
    </BackgroundColor>
   
  )
}
