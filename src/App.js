
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import Channels from "./pages/Channels";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/channels" exact element={<Channels />} />
        </Routes>
      </Router>
      </AuthContextProvider>
  );
}

export default App;
