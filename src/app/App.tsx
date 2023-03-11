import { FC } from 'react';
import { Fretboard } from 'features';
import { Header } from 'layout/Header/Header';
import './App.scss';
import { Routing } from './Routing';

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Fretboard />
    </div>
  );
};

export default App;
