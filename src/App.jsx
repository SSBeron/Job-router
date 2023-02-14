import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </main>
  )
}

export default App;
