
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


import StoreLg from "./page/StoreLg"
import StoreMb from "./page/StoreMb"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/lg' element={<StoreLg/>}/>
        <Route path='/mb' element={<StoreMb/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
