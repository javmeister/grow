// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import ResultsContainer from './components/results-container/results-container';

export function App() {
  return (
    <div className="min-h-full">
      <Navigation/>
      <Header />
      <ResultsContainer />
    </div>
  );
}

export default App;


