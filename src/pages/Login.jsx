import { Container, Input, Button, VStack, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Página Login</Heading>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button colorScheme="red">Entrar</Button>
      </VStack>
    </Container>
  );
};

export default Login;
