import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Episodes from "./Pages/Episodes";
import NotFound from "./Pages/NotFound";
import Layout from "./Pages/Layout";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
