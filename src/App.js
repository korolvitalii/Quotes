import Quotes from './components/Quotes';
import { useData } from './hooks/useData';

const App = () => {
  const { data, status } = useData();

  return (
    <>
      <Quotes data={data} status={status} />
    </>
  );
};

export default App;
