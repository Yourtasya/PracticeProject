//internal module
import { BrowserRouter } from "react-router-dom";

//external module
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import AppRouter from "./routeComponent/AppRouter";
import './App.css';
import "./styles/NavBar.css";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
