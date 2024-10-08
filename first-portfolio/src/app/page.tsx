import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { HomePageContent } from "@/components/Home/HomaPageContent";


export default function Home() {
  return (
    <div className="bg-black h-[100vh] sm:h-full">
      <Container>
          <Header focus="Home">Home</Header>
          <HomePageContent/>
      </Container>
    </div>
   
  );
}
