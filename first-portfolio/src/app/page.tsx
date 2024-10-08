import { BackgroundColor } from "@/components/BackgroundColor";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { HomePageContent } from "@/components/Home/HomaPageContent";


export default function Home() {
  return (
      <BackgroundColor>
         <Container className="h-[100vh]">
            <Header focus="Home"/>
            <HomePageContent/>
        </Container>
      </BackgroundColor>

  );
}
