import { RegistredForm } from '../modules/RegistredForm/RegistredForm';
import { HelmetProvider } from 'react-helmet-async';

export default function Register() {
  return (
    <div>
      <HelmetProvider>
        <title>Register</title>
      </HelmetProvider>
      <RegistredForm />
    </div>
  );
}
