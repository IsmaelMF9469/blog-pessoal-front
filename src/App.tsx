import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title} from './components/title/Title'
import { Text } from './components/text/Text';

function App() {
  const nome = 'Ismael';
  return (
    <>
      <Title nome="BLOG PESSOAL" />
      <Text />

    </>
    );
}

export default App;
