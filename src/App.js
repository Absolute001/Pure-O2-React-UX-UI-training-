import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
