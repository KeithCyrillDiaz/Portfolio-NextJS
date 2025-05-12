import { fetchTechnicalSkills, fetchTechnicalSkillsType } from '@/API/TechnicalSkills'
import { AboutMe } from '@/components/About/AboutMe'
import { Education } from '@/components/About/Education'
import { Experience } from '@/components/About/Experience'
import { Hobbies } from '@/components/About/Hobbies'
import { TechnicalSkills } from '@/components/About/TechnicalSkills'
import { BackgroundColor } from '@/components/BackgroundColor'
import { Container } from '@/components/Container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/Header'
import { LoadingSpinner } from '@/components/Loading'



export default async function About() {

  let skills: fetchTechnicalSkillsType | undefined;
  try {
    skills  = await fetchTechnicalSkills()

  } catch (error) {
    console.error("Error fetching technical skills:", error);
    skills = undefined;
  }

  return (
    <BackgroundColor>
       <Container>
        <Header focus='About'/>
        <AboutMe/>
        <Education/>
        {!skills ? <LoadingSpinner/> : <TechnicalSkills skills = {skills.result}/>}
        <Experience/>
        <Hobbies/>
        <Footer focus='About'/>
      </Container>
    </BackgroundColor>
   
  )
}
