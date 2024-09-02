import logo from './logo.svg';
import './App.css';
import MainScreen from "./MainComponents/MainScreen";
import InformationBlock from "./ContentComponents/InformationBlock";
import CatalogBlock from "./ContentComponents/CatalogBlock";

function App() {
  return (
    <div className="App">
        <MainScreen/>
        <InformationBlock
            title={'Что такое Battlecodes'}
            descFirstPart={'инфаинфаинфаинфаинфаинфаинфаинфа'}
            descSecondPart={'Оттачивай свои навыки в программировании и прокачивай алгоритмическое мышление.'}/>
        <CatalogBlock/>
    </div>
  );
}

export default App;
