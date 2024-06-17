import { Container, Text, VStack, Heading, Image, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Panda World</Heading>
        <Image src="/images/panda.jpg" alt="Panda" boxSize="300px" borderRadius="full" />
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="lg">Pandas are native to the mountain ranges of central China. They are known for their distinctive black and white coloring and their love of bamboo.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;