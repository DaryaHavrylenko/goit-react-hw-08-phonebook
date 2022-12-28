import { Heading, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Flex justifyContent="center">
        <Heading
          as="h1"
          size="lg"
          fontSize="30px"
          m="20"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Hello! It's your contacts book! This you can save contacts.
        </Heading>
      </Flex>
    </div>
  );
}
