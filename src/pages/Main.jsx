import { Container, Heading } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";

const Main = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading>Bem-vindo à Página Principal</Heading>
      <Text fontSize="lg" mt={4}>
        Aqui você pode gerenciar suas finanças de forma eficiente.
      </Text>
      <Text fontSize="md" mt={2}>
        Use a barra de navegação abaixo para acessar diferentes seções do aplicativo.
      </Text>
      <Navigation />
    </Container>
  );
};

export default Main;
