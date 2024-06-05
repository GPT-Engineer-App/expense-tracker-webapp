import { Container, Input, Button, VStack, Heading } from "@chakra-ui/react";

const Register = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Cadastro</Heading>
        <Input placeholder="Nome Completo" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button colorScheme="red">Criar Conta</Button>
      </VStack>
    </Container>
  );
};

export default Register;
