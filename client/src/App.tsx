import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GameUI from './components/game-ui'
import {Entity} from "./types/entity"

const player:Entity = new Entity('Hero', 20, 6, 3);

const App:React.FC = () =>{
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/'></Route>
          <Route path='/game' element={<GameUI player={player}/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
