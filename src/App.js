import './App.css';
import CardContainer from './component/cardContainer';
import DragDrop from './component/DragDrop';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <>
      <Counter />
      <CardContainer />
      <DragDrop changeInputFile={setI} />
      {image ? (
          <img
            className="placeholder"
            src={image.file}
            width={250}
            height={250}
          />
        ) : (
          <div className="placeholder" />
        )}
    </>
  );
}

export default App;
