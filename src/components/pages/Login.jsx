import { LoginForm } from '../modules/LoginForm/LoginForm';
import { HelmetProvider } from 'react-helmet-async';

export default function Login() {
  return (
    <div>
      <HelmetProvider>
        <title>Login</title>
      </HelmetProvider>
      <LoginForm />
    </div>
  );
}
