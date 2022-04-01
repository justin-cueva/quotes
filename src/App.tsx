import QuoteContainer from "./components/QuoteContainer";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<QuoteContainer />} />
          <Route path={"/favorites"} element={<div>Favorites</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
