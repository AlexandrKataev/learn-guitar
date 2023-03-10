import { FC } from 'react';
import { Fretboard } from '../features';
import { Header } from '../layout/Header/Header';
import './App.scss';

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Fretboard />
    </div>
  );
};

export default App;
