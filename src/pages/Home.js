import { Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Heading as="h1" size="lg" fontSize="30px">
        Hello! It's your contacts book{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        This you can save contacts.
      </Heading>
    </div>
  );
}
