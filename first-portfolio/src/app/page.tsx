import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { HomePageContent } from "@/components/Home/HomaPageContent";


export default function Home() {
  return (
    <Container>
        <Header focus="Home">Home</Header>
        <HomePageContent/>
    </Container>
  );
}
