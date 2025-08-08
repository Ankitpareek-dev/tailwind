import { Container } from "@/components/container";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="layout">
      <Container className="flex flex-row items-center justify-center">
        <Navbar></Navbar>
      </Container>
    </div>
  );
}
