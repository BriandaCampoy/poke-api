import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './routes/home/Home'


function App() {

  return (
   <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/:id" element={<Pokemon/>}/> */}
    </Routes>
   </HashRouter>
  )
}

export default App
