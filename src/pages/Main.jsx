import { Container, Heading } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";

const Main = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading>Página Principal</Heading>
      <Navigation />
    </Container>
  );
};

export default Main;
