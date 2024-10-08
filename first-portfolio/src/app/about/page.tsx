import { AboutMe } from '@/components/About/AboutMe'
import { Education } from '@/components/About/Education'
import { BackgroundColor } from '@/components/BackgroundColor'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import React from 'react'

export default function About() {
  return (
    <BackgroundColor className='pb-12'>
       <Container>
        <Header focus='About'/>
        <AboutMe/>
        <Education/>
      </Container>
    </BackgroundColor>
   
  )
}
