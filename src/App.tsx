import QuoteContainer from "./components/QuoteContainer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<QuoteContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
