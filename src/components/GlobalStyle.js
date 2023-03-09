import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-left: 20px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  button {
  margin-top: 8px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  button:hover,
  button:focus {
  background-color: #1976d2;
  color: #fff;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &:hover,
  &:focus {
    color: white;
    background-color: #1976d2;
  }
  &.active {
    color: white;
    background-color: #1976d2;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  margin-left: 20px;
  margin: 16px;
  font-weight: 700;
`;

export const Form = styled.form`
  margin-left: 20px;
  width: 320px;
  padding: 8px;
`;
