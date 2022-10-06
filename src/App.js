import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return (
    <BrowserRouter>
      <Routes basename="/my-movie-app">
        <Route 
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />} 
        />
        <Route 
          path="/movie/:id" 
          element={<Detail />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;