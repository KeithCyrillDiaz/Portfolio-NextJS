import { fetchTeamProjects, fetchTeamProjectsType } from '@/API/TeamProjects'
import { BackgroundColor } from '@/components/BackgroundColor'
import { Container } from '@/components/Container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/Header'
import { LoadingSpinner } from '@/components/Loading'
import { TeamProjects } from '@/components/Projects/TeamProjects'
import React from 'react'


export default async function Projects() {

  let teamProjects: fetchTeamProjectsType | undefined;
  try {
    teamProjects  = await fetchTeamProjects()
    console.log("team projects: ", teamProjects)
  } catch (error) {
    console.error("Error fetching technical skills:", error);
    teamProjects
  }

  return (
    <BackgroundColor>
      <Container>
        <Header focus='Projects'/>
        {teamProjects ? <TeamProjects data={teamProjects.result}/> : <LoadingSpinner/>}
        <Footer focus='Projects'/>
      </Container>
    </BackgroundColor>
  )
}
