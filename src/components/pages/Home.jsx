import { Message } from 'components/GlobalStyle';
import { HelmetProvider } from 'react-helmet-async';

export default function Home() {
  return (
    <main>
      <HelmetProvider>
        <title>Phonebook</title>
      </HelmetProvider>
      <Message>Contacts home page</Message>
    </main>
  );
}
