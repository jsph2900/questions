import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [question, setQuestion] = useState(data);

  return (
    <main>
      <Questions questions={question} />
    </main>
  );
};
export default App;
