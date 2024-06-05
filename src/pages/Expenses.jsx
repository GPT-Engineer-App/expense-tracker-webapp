import { Container, Heading, Box } from "@chakra-ui/react";

const Expenses = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading>Gastos</Heading>
      <Box width="100%" height="300px" bg="gray.100" mt={4}>
        {}
      </Box>
    </Container>
  );
};

export default Expenses;
