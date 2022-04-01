import QuoteContainer from "./components/QuoteContainer";
import FavoriteQuotes from "./components/FavoriteQuotes";
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
          <Route path={"/favorites"} element={<FavoriteQuotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
