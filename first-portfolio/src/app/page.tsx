import { Container } from "@/components/Container";
import { Header } from "@/components/Header";



export default function Home() {
  return (
    <Container>
        <Header focus="Home">Home</Header>
        <meta name="description" content="Welcome to Keith Diaz's portfolio showcasing web development projects." />
        <meta name="keywords" content="Keith Diaz, portfolio, web developer, Next.js" />
    </Container>

  );
}
