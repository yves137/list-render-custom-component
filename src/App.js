import { AnimalList } from "./AnimalList";
const animals=['dog 🐶', 'cat 😹', 'chicken 🐔', 'cow 🐮', 'sheep 🐑', 'horse 🐴']

function App() {
  return (
    <AnimalList animals={animals}/>
  );
}

export default App;
