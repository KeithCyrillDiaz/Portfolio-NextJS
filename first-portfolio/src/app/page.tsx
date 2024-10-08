import { BackgroundColor } from "@/components/BackgroundColor";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { HomePageContent } from "@/components/Home/HomaPageContent";


export default function Home() {
  return (
      <BackgroundColor>
         <Container>
            <Header focus="Home"/>
            <HomePageContent/>
        </Container>
      </BackgroundColor>

  );
}
