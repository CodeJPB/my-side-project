import { MyCvOnline } from "./components/MyCvOnline/MyCvOnline";
import { cvExemple as cv } from "./components/MyCvOnline/__seed__/cv.exemple";

function App() {
  return (
    <div className="App">
      <MyCvOnline {...cv} />
    </div>
  );
}

export default App;
