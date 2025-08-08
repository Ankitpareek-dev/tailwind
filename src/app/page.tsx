import { Container } from "@/components/container";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-blue-50 relative">
      <div>
        <Container className=" ">
          <Navbar></Navbar>
        </Container>
      </div>
    </div>
  );
}
