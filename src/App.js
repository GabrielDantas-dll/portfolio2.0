import "./App.css";
import "./background.css";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Footer />  
    </div>
  );
}

export default App;
