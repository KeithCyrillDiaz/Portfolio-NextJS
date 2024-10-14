import { BackgroundColor } from '@/components/BackgroundColor'
import { Container } from '@/components/Container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/Header'
import { TeamProjects } from '@/components/Projects/TeamProjects'
import React from 'react'

export default function Projects() {
  return (
    <BackgroundColor>
      <Container>
        <Header focus='Projects'/>
        <TeamProjects/>
        <Footer focus='Projects'/>
      </Container>
    </BackgroundColor>
  )
}
