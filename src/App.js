import "./App.css";
import Header from "./components/header";
import Homepage from "./components/home-page";
import Category from "./components/category";
import Destination from "./components/destination";
import Trip from "./components/trip";
import Coment from "./components/coment";
import Logos from "./components/logos";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Category />
      <Destination />
      <Trip />
      <Coment />
      <Logos />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
